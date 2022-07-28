## 实战：在组件中发送请求并显示数据

页面上有一个按钮，点击后，我们可以发起一个请求获取一个用户列 表，并要求显示在页面上。在这个过程中，我们需要考虑数据状态，Loading 的状态，以 及请求出错的处理。

```jsx
import React from "react";

export default function UserList() {
  const [users, setUsers] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const fetchUsers = async () => {
    setLoading(true);
    try {
      const res = await fetch("https://reqres.in/api/users/");
      const json = await res.json();
      setUsers(json.data);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  };

  return (
    <div className="user-list">
      <button onClick={fetchUsers} disabled={loading}>
        {loading ? "Loading..." : "Show Users"}
      </button>
      {error && <div style={{ color: "red" }}>Failed: {String(error)}</div>}
      <br />
      <ul>
        {users.length > 0 &&
          users.map((user) => {
            return <li key={user.id}>{user.first_name}</li>;
          })}
      </ul>
    </div>
  );
}

```

1. 点击 Show Users 按钮时，会显示 Loading 的文本，并将 button 设为 disabled。
2. 请求 成功后，则显示获取的用户列表。如果请求失败，则显示一段错误信息的文本。



在 React 组件中，任何一个 state 发生变化时，整个函数组件其实是被完全执行一遍的， 而且除了 state，多次的执行之间没有任何关系。所以在考虑这样一个场景的实现时，我们 的思考方式就是要首先考虑这个组件有哪些状态（state），这些状态的变化是由什么触发 的，从而将整个功能串联起来。

Questions:

1. 函数中定义了回调函数 fetchUsers，但函数每次都是全部重新执行，那会不会重复定义 很多次呢？
   1. 是的，这种写法会重复定义很多函数。不过为了避免这样的问题，React 提供了 useCallback 这样一个 Hook 来缓存回调函数。
2. 如果另外一个组件可能也需要使用到 Users 这个数据，比如一个下拉框，那么是不是每 次都要重复这个发起请求的逻辑呢？
   1. 对于异步请求逻辑的重用，这其实也意味着跨组件状态的重用

## Why React

### 重新思考 React 组件的本质

React 组件的模型其实很直观，就是从 Model 到 View 的映射，这里的 Model 对应到 React 中就是 state 和 props。

#### 过去：

需要处理当 Model 变化时，DOM 节点应该如何变化的细节问题。而现在， 我们只需要通过 JSX，根据 Model 的数据用声明的方式去描述 UI 的最终展现就可以了， 因为 React 会帮助你处理所有 DOM 变化的细节。而且，当 Model 中的状态发生变化 时，UI 会自动变化，即所谓的数据绑定。

可以把 UI 的展现看成一个函数的执行过程。其中，Model 是输入参数，函 数的执行结果是 DOM 树，也就是 View。而 React 要保证的，就是每当 Model 发生变化时，函数会重新执行，并且 生成新的 DOM 树，然后 React 再把新的 DOM 树以最优的方 式更新到浏览器。

Class 在作为 React 组件的载体时：

1. React 组件之间是不会互相继承的。比如说，你不会创建一个 Button 组件，然后 再创建一个 DropdownButton 来继承 Button。所以说，React 中其实是没有利用到 Class 的继承特性的。
2. 因为所有 UI 都是由状态驱动的，因此很少会在外部去调用一个类实例（即组 件）的方法。要知道，组件的所有方法都是在内部调用，或者作为生命周期方法被自动调 用的。

这两个 Class 最重要的特性其实都没有用到。而在 React 出现之时，主流的方 式还是基于对象去考虑问题。例如获得一个对话框的实例，然后通过 dialog.show(), dialog.hide() 这样的方式细粒度地去控制 UI 的变化。
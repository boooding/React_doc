## JSX

React 的一大亮点就是虚拟 DOM：可以在内存中创建虚拟 DOM 元素，由虚拟 DOM 来确保只对界面上真正变化的部分进行实际的 DOM 操作。和真实 DOM 一样，虚拟 DOM 也可以通过 JavaScript  React.createElement来创建：

虽然通过以上的方式，就可以构建成 DOM 树，但这种代码可读性比较差，于是就有了 JSX 。

## JSX与Fiber的关系

### JSX - babel

```jsx
<div>1</div>	
```

Transform-react-jsx => React.createElement

```js
function createElement(type, config, children) {
  
}
```



## React Component与React Element的关系

React Element: 

React.createElement 调用的结果

React Component：

class/function component 

React Component与React Element的关系： React Component会作为React.createElement的第一个参数，type参数



JSX 和 fiber 的关系：

？？？



## Render  (RenderRootSync)

### Render Process






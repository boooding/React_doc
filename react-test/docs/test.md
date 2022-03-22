### Unit Testing

Jest === Mocha + Chai + Sinoni+ mockserver + istanbul

1. Jest
2. Mocha 
3. Jasmine
4. Karma
5. ava
6. Tape

### Integration testing

人们定义集成测试的方式并不相同，尤其是对于前端。有些人认为在浏览器环境上运行的测试是集成测试；有些人达为对具有模块依赖性的单元进行的任何测试都是集成测试；也有些人认为任何完全渲染的组件测试都是集成测试。

优点：

- 由于是从用户使用角度出发，更容易获得软件使用过程中的正确性
- 集成测试相对于写了软件的说明文档
- 由于不关注底层代码实现细节，所以更有利于快速重构
- 相比单元测试，集成测试的开发速度要更快一些

缺点：

- 测试失败的时候无法快速定位问题
- 代码覆盖率较低
- 速度比单元测试要慢

### E2E

一些流行的端到端测试框架：

- Cypress
- Nightwatch
- Webdriverlo
- playwright

### 快照测试 SnapShot

- 第三方组件库 

### 测试金字塔

- UI test +
- service test ++ 
- unit tests +++

### TDD

### BDD


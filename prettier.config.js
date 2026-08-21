export default {
  // 指定最大换行长度
  printWidth: 120,
  // 空格数
  tabWidth: 2,
  // 使用制表符而不是空格缩进行（true：制表符，false：空格）
  useTabs: false,
  // 结尾不用分号
  semi: true,
  // 使用单引号
  singleQuote: false,
  // 在对象字面量中决定是否将属性名用引号括起来
  quoteProps: "as-needed",
  // 在jsx中使用单引号而不是双引号
  jsxSingleQuote: false,
  // 多行时尽可能打印尾随逗号
  trailingComma: "none",
  // 在对象数组括号与文字之间加空格
  bracketSpacing: true,
  // 将 > 多行元素放在最后一行的末尾，而不是单纯放在下一行
  bracketSameLine: false,
  // (x)=>{}箭头函数参数只有一个时是否要有小括号（avoid：省略括号，always:不省略括号）
  arrowParens: "avoid",
  // 指定要使用的解析器，不需要写文件开头的@prettier
  requirePragma: false,
  // 可以在文件顶部插入一个特殊标记，指定该文件已经使用Prettier格式化
  insertPragma: false,
  // 用于控制文本是否应该被换行以及如何进行换行
  proseWrap: "preserve",
  htmlWhitespaceSensitivity: "css",
  // 控制在Vue单文件组件中<script>和<style>标签内的代码缩进方式
  vueIndentScriptAndStyle: false,
  // 换行符使用lf结尾是可选值“<auto>|lf|crlf|cr
  endOfLine: "auto",
  rangeStart: 0,
  rangeEnd: Infinity
};

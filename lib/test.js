{
    description: 'Enter your password',     // Prompt displayed to the user. If not supplied name will be used.向用户显示的提示。如果未提供，将使用名称。
    type: 'string',                 // Specify the type of input to expect.
    pattern: /^\w+$/,                  // Regular expression that input must be valid against.输入必须有效的正则表达式。
    message: 'Password must be letters', // Warning message to display if validation fails.验证失败时显示的警告消息。
    hidden: true,                        // If true, characters entered will either not be output to console or will be outputed using the `replace` string.如果为真，输入的字符将不会输出到控制台，或者将使用' replace '字符串输出。
    replace: '*',                        // If `hidden` is set it will replace each hidden character with the specified string.如果设置了“隐藏”,它将用指定的字符串替换每个隐藏的字符。
    default: 'lamepassword',             // Default value to use if no value is entered.未输入值时使用的默认值。
    required: true                        // If true, value entered must be non-empty.如果为真，输入的值必须非空。
    before: function(value) { return 'v' + value; } // Runs before node-prompt callbacks. It modifies user's input//在节点提示回调之前运行。它修改用户的输入
  }
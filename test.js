const util = require('./util');

// console.log(util.parseSource("Title"));
// console.log(util.parseSource("20091010-Title"));
// console.log(util.parseSource("2009-10-10-Title"));
// console.log(util.parseSource("[20091010]-Title"));
// console.log(util.parseSource("「20091010」Title"));
// console.log(util.parseSource("『20091010』Title"));
// console.log(util.parseSource("『20091010』Title"));

// console.log(util.parseSource("Notes/skynet源码笔记.md"));
console.log(util.parseSource("D:\\GithubPage\\hexo-enhancer\\Notes\\skynet源码笔记.md"))

console.log(util.crc32("1234567890asdfghjkl"));

let tags = [];
util.parseTags("Linux, Mac, Shell, HTML", tags);
console.log(tags);
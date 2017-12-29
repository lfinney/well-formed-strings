const balancedFunction = (string) => {
  const stack = [];
  const opened = {
    '(': ')',
    '[': ']',
    '{': '}'
  };

  const closed = {
    ')': true,
    ']': true,
    '}': true
  }

  for (let i = 0; i < string.length; i++) {
    let puncuation = string[i];

    if (opened[puncuation]) {
      stack.push(puncuation)
    }

    if (closed[puncuation]) {

      if (opened[stack.pop()] !== puncuation) {
        return false
      }
    }
  }

  return stack.length === 0;
}

module.exports = balancedFunction;

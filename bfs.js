const bfs = (tree) => {
  const result = [];
  const queue = [tree];

  while (queue.length > 0) {
    const el = queue.shift();
    result.push(el.value);
    el.children && queue.push(...el.children);
  }

  return result;
};

const data = {
  value: '1',
  children: [
    {
      value: '2',
      children: [
        {
          value: '4',
          children: [{ value: '8' }, { value: '9' }],
        },
        {
          value: '5',
          children: [{ value: '10' }, { value: '11' }],
        },
      ],
    },
    {
      value: '3',
      children: [
        {
          value: '6',
          children: [{ value: '12' }, { value: '13' }],
        },
        {
          value: '7',
          children: [{ value: '14' }, { value: '15' }],
        },
      ],
    },
  ],
};

console.log(bfs(data));

function compareNA(a, b) {
  const nameA = a.name.en.toUpperCase();
  const nameB = b.name.en.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = 1;
  } else if (nameA < nameB) {
    comparison = -1;
  }
  return comparison;
}

function compareND(a, b) {
  const nameA = a.name.en.toUpperCase();
  const nameB = b.name.en.toUpperCase();

  let comparison = 0;
  if (nameA > nameB) {
    comparison = -1;
  } else if (nameA < nameB) {
    comparison = 1;
  }
  return comparison;
}

export default (sorting, list) => {
  switch (sorting.field) {
    case 'name':
      if (sorting.direction === 'desc') {
        return list.sort(compareND);
      }
      return list.sort(compareNA);

    default:
      return 'no valid sorting';
  }
};

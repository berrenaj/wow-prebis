
export const ucFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

export const formatPlural = (int, single, plural) => {
  if (int === 1) {
    return single;
  }

  return plural;
}

export const getClassFromData = (data, cls) => {
  let c = data[ucFirst(cls)];

  if (c) {
    Object.keys(c.specs).forEach((s, i) => {
      c.specs[s].class = c;
      c.specs[s].getItems = () => {
        let items = [];
        Object.keys(c.specs[s]).filter((key, index) => {
          return c.specs[s][key] && Array.isArray(c.specs[s][key])
        }).forEach((key, i) => {
          items = items.concat(c.specs[s][key]);
        });

        return items;
      }
    });

    c.getItems = () => {
      let items = [];
      Object.keys(c.specs).forEach((key, index) => {
        items = items.concat(c.specs[key].getItems());
      });

      return items;
    }

    return c;
  }

  return;
};

export const getItemFromData = (data, params) => {
  if (params.class) {
    let c = getClassFromData(data, ucFirst(params.class));

    if (!c) {
      return;
    }

    if (params.spec) {
      return c.specs[ucFirst(params.spec)];
    }

    return c;
  }
};
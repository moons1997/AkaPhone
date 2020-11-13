import _ from "lodash";

export const paginate = (items, curentPage, pageSize) => {
  let startIndex = (curentPage - 1) * pageSize;
  return _(items).slice(startIndex).take(pageSize).value();
};

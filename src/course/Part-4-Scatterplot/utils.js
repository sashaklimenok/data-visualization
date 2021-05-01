export const mapRows = (row) => {
  row.sepal_length = +row.sepal_length;
  row.sepal_width = +row.sepal_width;
  row.petal_length = +row.petal_length;
  row.petal_width = +row.petal_width;
  return row;
}
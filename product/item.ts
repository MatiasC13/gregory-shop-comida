import getProducts from "product/storeservice";

export async function getPathsFromTitle() {
  const items = await getProducts();

  return items.map((item) => {
    return {
      params: {
        id: convertToPath(item.title),
      },
    };
  });
}

export async function getItemData(title:string) {
  const items = await getProducts();
  const product = items.find((item) => convertToPath(item.title) === title);
  return  product
}

export function convertToPath(title: string) {
  return title.toLowerCase().replace(/\s/g, "-");
}





import {extendTheme, theme,} from "@chakra-ui/react";
// import { themeOwner } from "utils/ownerData";

// const theme = extendTheme({
  // CELULAR
  // colors: {

  //   primary:themeOwner

  // },
  // fonts: {
  //   heading: "Roboto, sans-serif",
  //   body: "Roboto, sans-serif",
  // },
  // styles: {
  //   global: {
  //     body: {
  //       backgroundColor: "primary.100",
  //     },
  //   },
  // },
// });

// export default theme

export default extendTheme({
  colors: {
    primary: theme.colors["orange"],
  },
  fonts: {
    heading: "Roboto, sans-serif",
    body: "Roboto, sans-serif",
  },
//   // styles: {
//   //   global: {
//   //     body: {
//   //       backgroundColor: "primary.100",
//   //     },
//   //   },
//   // },
});


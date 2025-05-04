import { Blog } from "@/types/blog";

const BlogData: Blog[] = [
  {
    _id: 1,
    mainImage: "./images/blog/1.jpg",
    title: "By Cash",
    metadata:[
      "Pay by Cash at the ",
      "Pagla mosque and Islamic Complex",
      "Harua, Kishoreganj, Bangladesh"
    ]
  },
  {
    _id: 2,
    mainImage: "./images/blog/2.jpg",
    title: "By Bank Transfer",
    metadata:
      [
      "Pagla Mosque and Islamic Complex",  
      "Account No: 0000000000000000",
      "SWIFT: EXBKBDDHX007",
      "Export Import Bank of Bangladesh Limited",
      "Harua, Kishoreganj, Bangladesh"],
  },
  {
    _id: 2,
    mainImage: "./images/blog/3.jpg",
    title: "By Online Payment",
    metadata:
      ["Pay using reliable online payment processor.",
      "SSL Wireless (From Bangladesh)",
      "Stripe (From Overseas)"],
  }
];

export default BlogData;

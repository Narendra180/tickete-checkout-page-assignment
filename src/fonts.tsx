import { Roboto, Open_Sans } from "next/font/google";

const robotoFont = Roboto({
    subsets: ["latin"],
    weight: ["100", "300", "400", "500", "700", "900"]
})

const openSansFont = Open_Sans({
    subsets: ["latin"]
});

export { robotoFont, openSansFont };
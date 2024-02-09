import { Roboto_Serif, Open_Sans } from "next/font/google";

const robotoSerifFont = Roboto_Serif({
    variable: "--font-roboto-serif",
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

const openSansFont = Open_Sans({
    variable: "--font-open-sans",
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700", "800"]
});

export { robotoSerifFont, openSansFont };
import TerminalUtil from "@/app/util/terminalUtil";
import menuFundamentos from "./menuFundamentos";

export default async function menuPrincipal() {
    TerminalUtil.titulo("Menu Principal");
    const [indice] = await TerminalUtil.menu(["1. Fundamentos", "Sair"]);
    switch (indice) {
        case 0:
            await menuFundamentos();
            break;
        case 1:
            process.exit(0);
    }
    menuPrincipal();
}

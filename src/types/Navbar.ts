export interface NavbarProps {
    initialRoute: string;
    items: string[];
    onClickItem: (name: string | null) => void;
}
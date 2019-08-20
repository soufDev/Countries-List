export interface InputProps {
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
    onKeyPress: (e: React.KeyboardEvent<HTMLInputElement>) => void;
    placeHolder: string;
}
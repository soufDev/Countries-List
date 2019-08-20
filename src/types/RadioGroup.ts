export interface RadioGroupProps {
    items: string[];
    value: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

export interface RadioProps {
    value: string;
    label: string;
    onChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

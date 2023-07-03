
export interface TextInputProps {
    value: string,
    onChange: (s: string) => void;
    placeHolder?: string,
    type?: 'text' | 'password',
    error?: string,
}
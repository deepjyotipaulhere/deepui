
export interface Theme {
    colors: {
        primary: string;
        secondary: string;
    }
}

export const defaultTheme: Theme = {
    colors: {
        primary: '#1976d2',
        secondary: '#dc004e',
    }
};

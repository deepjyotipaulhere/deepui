
export interface Theme {
    typography?: {
        fontFamily?: string
    },
    colors?: {
        primary?: string;
        secondary?: string;
    },
    borderRadius?: number;
}

export const defaultTheme: Theme = {
    typography: {
        fontFamily: 'Schibsted Grotesk,Roboto Condensed'
    },
    colors: {
        primary: '#0047AB',
        secondary: '#dc004e',
    },
    borderRadius: 4
};

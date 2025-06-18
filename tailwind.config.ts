import type { Config } from 'tailwindcss';

const config = {
    // darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
        './layout/**/*.{ts,tsx}',
    ],
    prefix: '',
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px',
            },
        },
        extend: {
            colors: {
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                topbarBackground: 'hsl(var(--topbar-background))',
                topbarForeground: 'hsl(var( --topbar-foreground))',
                topbarIcon: 'hsl(var(--topbar-icon))',
                footbarBackground: 'hsl(var(--footbar-background))',
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                borderColor: 'hsl(var(--borderColor))',
                actionBackground: 'hsl(var(--actionBackground))',
                actionforeground: 'hsl(var(--actionforeground))',
                modalTop: 'hsl(var(--modalTop))',

                colorPrimary:'hsl(var(--red-primery))',
                DarkPrimary:'hsl(var(--grey-primery))',
                GreenSecondery:'hsl(var(--green-secondary))',
                YellowSecondery:'hsl(var(--yellow-secondary))',
                LightGrey:'hsl(var(--light-grey))',

                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))',
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))',
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))',
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))',
                },
                pophover: {
                    DEFAULT: 'hsl(var(--pophover))',
                    foreground: 'hsl(var(--pophover-foreground))',
                },
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))',
                },
                cardBg: {
                    DEFAULT: 'hsl(var(--cardBg))',
                    foreground: 'hsl(var(--cardBg-foreground))',
                },

               
            },
            fontSize: {
                'xxs': '0.75rem', //12px
                'xs': '0.875rem', //14px
                'sm': '1rem',     //16px
                'md': '1.125rem', //18px
                'lg': '1.25rem', //20px
                'xl': '1.438rem', //25px
                'xxl': '2.813rem', //45px
                '3xl': '3.125rem', //60px
                '4xl': '3.75rem', //60px
                '5xl': '5rem', //80px


            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' },
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' },
                },
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
            },
            fontFamily: {
                popp: ['var(--font-poppins)'],
            },
        },
    },
    plugins: [require('tailwindcss-animate')],
} satisfies Config;

export default config;

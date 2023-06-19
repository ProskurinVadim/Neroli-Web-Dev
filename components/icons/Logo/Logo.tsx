import { ISVG } from "../../../types";

const Logo: React.FC<ISVG> = ({ height = "40", width = "120", fill = "none", viewBox = "0 0 123 40" }) => {
    return (
        <svg width={width} height={height} viewBox={viewBox} fill={fill} xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_348_1652)">
                <path d="M40.97 19.88C40.97 21.22 40.83 22.56 40.55 23.87C40.28 25.18 39.86 26.46 39.32 27.69C38.79 28.92 38.11 30.08 37.35 31.16C36.58 32.24 35.7 33.24 34.74 34.15C32.81 35.96 30.54 37.37 28.11 38.32C26.89 38.8 25.63 39.15 24.35 39.39C23.07 39.63 21.77 39.75 20.47 39.75C19.17 39.75 17.87 39.63 16.59 39.39C15.31 39.15 14.05 38.8 12.84 38.32C10.41 37.37 8.14001 35.96 6.22001 34.15C5.26001 33.25 4.38001 32.25 3.61001 31.16C2.85001 30.08 2.18001 28.92 1.64001 27.69C1.11001 26.47 0.69001 25.19 0.42001 23.88C0.15001 22.57 0.0100098 21.23 0.0100098 19.89C0.0100098 18.55 0.15001 17.21 0.42001 15.9C0.69001 14.59 1.11001 13.31 1.64001 12.09C2.17001 10.87 2.84001 9.7 3.61001 8.62C4.38001 7.54 5.26001 6.54 6.22001 5.63C8.15001 3.82 10.41 2.4 12.85 1.45C14.06 0.97 15.33 0.62 16.61 0.38C17.87 0.12 19.17 0 20.47 0C21.77 0 23.07 0.12 24.35 0.36C25.63 0.6 26.89 0.95 28.11 1.43C30.55 2.38 32.82 3.79 34.75 5.6C35.71 6.51 36.59 7.51 37.36 8.59C38.13 9.68 38.8 10.84 39.33 12.06C39.86 13.29 40.28 14.57 40.55 15.88C40.82 17.19 40.96 18.53 40.96 19.87M38.13 26.88C38.53 25.81 38.83 24.69 39.04 23.57L39.06 23.46C38.09 23.5 37.13 23.51 36.17 23.51C35.57 23.51 34.96 23.51 34.36 23.5L33.45 23.48H33.34C33.34 23.48 33.26 23.48 33.24 23.48C33.18 23.48 33.12 23.48 33.07 23.49C33.03 23.49 32.99 23.51 33 23.51C33 23.51 33.02 23.5 33.04 23.47C33.07 23.44 33.08 23.39 33.08 23.35C33.08 23.34 33.08 23.31 33.08 23.31C33.08 23.31 33.08 23.3 33.08 23.29C33.08 23.29 33.08 23.29 33.09 23.31C33.1 23.33 33.14 23.37 33.18 23.4C33.22 23.44 33.27 23.47 33.31 23.5L33.5 23.62C33.75 23.79 34.01 23.95 34.26 24.12C34.76 24.46 35.27 24.8 35.76 25.15C36.56 25.71 37.36 26.28 38.15 26.87L38.13 26.88ZM37.68 27.99C37.78 27.76 37.88 27.52 37.98 27.28C37.09 26.79 36.22 26.28 35.36 25.76C34.84 25.45 34.33 25.12 33.81 24.81C33.55 24.65 33.3 24.48 33.04 24.32L32.85 24.2C32.77 24.15 32.7 24.09 32.62 24.03C32.55 23.96 32.47 23.89 32.4 23.79C32.36 23.74 32.33 23.68 32.3 23.61C32.29 23.57 32.27 23.53 32.26 23.48C32.25 23.44 32.25 23.38 32.25 23.33C32.25 23.28 32.27 23.21 32.28 23.16C32.3 23.1 32.33 23.05 32.36 23C32.42 22.91 32.51 22.85 32.57 22.81C32.71 22.73 32.82 22.71 32.93 22.69C33.03 22.68 33.13 22.67 33.22 22.67C33.27 22.67 33.31 22.67 33.34 22.67H33.45L34.36 22.71C34.97 22.74 35.57 22.77 36.18 22.81C37.17 22.87 38.15 22.95 39.13 23.05C39.18 22.75 39.22 22.45 39.25 22.15C36.65 21.5 31.55 20.66 30.85 22.61C30.64 23.19 30.69 23.74 30.99 24.3C32.09 26.31 36.17 27.59 37.67 28L37.68 27.99ZM28.44 37.62C29.41 37.15 30.34 36.6 31.22 35.98C32.25 35.24 33.2 34.4 34.07 33.48C35.47 31.98 36.62 30.27 37.49 28.43C35.88 27.99 31.78 26.67 30.59 24.52C30.24 23.89 30.17 23.23 30.38 22.56C30.22 22.49 30.05 22.44 29.87 22.39C29.62 22.33 29.37 22.28 29.12 22.25C28.61 22.18 28.1 22.16 27.59 22.18C26.57 22.22 25.56 22.43 24.67 22.88C24.23 23.1 23.82 23.39 23.48 23.74C23.13 24.08 22.85 24.48 22.63 24.92C22.4 25.35 22.27 25.83 22.17 26.31L22.11 26.67C22.09 26.79 22.08 26.92 22.07 27.04C22.07 27.16 22.04 27.29 22.04 27.41V27.78C22.04 28.28 22.07 28.77 22.17 29.25C22.27 29.73 22.4 30.21 22.58 30.68C22.93 31.61 23.44 32.49 24.02 33.31C24.61 34.13 25.28 34.89 26 35.6C26.36 35.95 26.74 36.3 27.12 36.62C27.31 36.78 27.51 36.94 27.71 37.1C27.86 37.21 28.2 37.46 28.44 37.63V37.62ZM18.6 39.34C19.21 39.4 19.83 39.43 20.45 39.43C21.09 39.43 21.74 39.39 22.38 39.33C21.79 38.71 21.03 37.49 20.54 35.85C19.96 37.85 19.1 38.88 18.6 39.34ZM3.41001 28.42C4.28001 30.27 5.44001 31.99 6.84001 33.49C7.70001 34.41 8.66001 35.25 9.69001 35.99C10.55 36.6 11.46 37.14 12.42 37.6C12.63 37.45 12.96 37.22 13.13 37.09C13.33 36.94 13.52 36.78 13.72 36.61C14.11 36.28 14.48 35.94 14.85 35.59C15.58 34.88 16.24 34.12 16.83 33.3C17.41 32.48 17.92 31.6 18.27 30.67C18.45 30.21 18.59 29.73 18.68 29.24C18.78 28.75 18.82 28.26 18.82 27.77V27.4C18.82 27.27 18.79 27.15 18.79 27.03C18.78 26.91 18.77 26.78 18.75 26.66L18.69 26.3C18.59 25.82 18.45 25.34 18.23 24.91C18.01 24.48 17.73 24.08 17.38 23.73C17.04 23.39 16.63 23.1 16.19 22.87C15.3 22.42 14.29 22.21 13.27 22.17C12.76 22.15 12.25 22.17 11.74 22.24C11.49 22.27 11.24 22.32 10.99 22.38C10.82 22.43 10.64 22.48 10.48 22.55C10.68 23.22 10.61 23.87 10.27 24.51C9.10001 26.65 5.05001 27.96 3.41001 28.41V28.42ZM1.83001 23.47L1.85001 23.58C2.06001 24.69 2.35001 25.8 2.75001 26.86C3.52001 26.27 4.31001 25.71 5.11001 25.16C5.60001 24.81 6.11001 24.48 6.61001 24.13C6.86001 23.96 7.11001 23.8 7.37001 23.63L7.56001 23.51C7.56001 23.51 7.65001 23.44 7.69001 23.41C7.73001 23.38 7.76001 23.34 7.78001 23.32C7.79001 23.31 7.78001 23.3 7.79001 23.3C7.79001 23.3 7.79001 23.31 7.79001 23.32C7.79001 23.32 7.79001 23.35 7.79001 23.36C7.79001 23.4 7.81001 23.45 7.83001 23.48C7.85001 23.51 7.87001 23.52 7.87001 23.52C7.88001 23.52 7.84001 23.51 7.80001 23.5C7.75001 23.5 7.70001 23.49 7.63001 23.49C7.60001 23.49 7.56001 23.49 7.53001 23.49H7.42001L6.51001 23.51C5.91001 23.51 5.30001 23.53 4.70001 23.52C3.75001 23.52 2.80001 23.51 1.85001 23.47H1.83001ZM1.63001 22.13C1.66001 22.43 1.71001 22.74 1.75001 23.04C2.72001 22.94 3.69001 22.87 4.66001 22.81C5.27001 22.77 5.87001 22.74 6.48001 22.71L7.39001 22.67H7.50001C7.50001 22.67 7.57001 22.67 7.62001 22.67C7.71001 22.67 7.81001 22.67 7.91001 22.69C8.02001 22.71 8.12001 22.73 8.27001 22.81C8.33001 22.84 8.42001 22.91 8.48001 23C8.51001 23.05 8.54001 23.1 8.56001 23.16C8.58001 23.22 8.59001 23.28 8.59001 23.33C8.59001 23.38 8.59001 23.44 8.58001 23.48C8.57001 23.52 8.56001 23.57 8.54001 23.61C8.51001 23.68 8.48001 23.74 8.44001 23.79C8.37001 23.89 8.30001 23.96 8.22001 24.03C8.15001 24.09 8.07001 24.15 7.99001 24.2L7.80001 24.32C7.54001 24.48 7.29001 24.65 7.03001 24.81C6.51001 25.13 6.00001 25.45 5.48001 25.76C4.63001 26.28 3.77001 26.78 2.89001 27.27C2.98001 27.51 3.08001 27.75 3.19001 27.98C4.72001 27.56 8.74001 26.28 9.83001 24.29C10.13 23.74 10.18 23.18 9.97001 22.6C9.28001 20.65 4.22001 21.48 1.61001 22.13H1.63001ZM1.58001 18.13C1.53001 18.71 1.50001 19.3 1.50001 19.88C1.50001 20.47 1.53001 21.07 1.58001 21.66C3.67001 21.15 9.25001 20.02 10.36 22.26C10.54 22.17 10.71 22.12 10.89 22.06C11.15 21.98 11.41 21.92 11.67 21.88C11.99 21.82 12.31 21.78 12.63 21.76C12.09 19.68 10.89 18.52 10.4 18.12C9.95001 18.88 8.83001 19.14 7.51001 19.14C5.45001 19.14 2.89001 18.51 1.58001 18.14V18.13ZM2.89001 12.53L2.87001 12.59C2.41001 13.75 2.08001 14.95 1.85001 16.17V16.19C2.79001 16.19 3.73001 16.23 4.67001 16.27C5.27001 16.29 5.87001 16.33 6.47001 16.36C6.77001 16.38 7.07001 16.4 7.35001 16.4C7.48001 16.4 7.62001 16.4 7.70001 16.38C7.71001 16.38 7.72001 16.38 7.72001 16.38C7.72001 16.38 7.72001 16.38 7.70001 16.39C7.68001 16.4 7.68001 16.41 7.65001 16.44C7.63001 16.47 7.61001 16.5 7.60001 16.53C7.60001 16.57 7.59001 16.59 7.60001 16.62C7.60001 16.65 7.60001 16.65 7.60001 16.66C7.60001 16.65 7.57001 16.61 7.53001 16.56C7.50001 16.52 7.45001 16.47 7.41001 16.43C7.33001 16.35 7.20001 16.24 7.10001 16.15L6.42001 15.57C5.96001 15.18 5.50001 14.8 5.04001 14.41C4.32001 13.79 3.60001 13.17 2.89001 12.53ZM3.51001 11.12C3.35001 11.45 3.20001 11.78 3.06001 12.11C3.89001 12.66 4.70001 13.24 5.50001 13.84C5.99001 14.2 6.46001 14.57 6.94001 14.94C7.18001 15.12 7.41001 15.32 7.65001 15.51C7.77001 15.61 7.88001 15.7 8.01001 15.83C8.08001 15.89 8.13001 15.95 8.19001 16.03C8.25001 16.1 8.31001 16.18 8.37001 16.31C8.39001 16.35 8.40001 16.37 8.41001 16.42C8.42001 16.47 8.43001 16.51 8.44001 16.57C8.45001 16.69 8.41001 16.86 8.32001 16.96C8.27001 17.02 8.23001 17.05 8.19001 17.09C8.14001 17.12 8.11001 17.14 8.07001 17.16C8.03001 17.18 8.00001 17.19 7.97001 17.2C7.94001 17.21 7.91001 17.22 7.88001 17.22C7.66001 17.26 7.49001 17.26 7.33001 17.26C7.01001 17.25 6.71001 17.22 6.41001 17.2C5.81001 17.14 5.21001 17.09 4.61001 17.02C3.66001 16.92 2.71001 16.79 1.77001 16.64C1.72001 16.98 1.67001 17.31 1.63001 17.65C4.18001 18.37 9.15001 19.39 10.01 17.85C10.24 17.44 10.27 17 10.11 16.5C9.39001 14.28 5.07001 11.92 3.51001 11.13V11.12ZM5.42001 7.97C4.78001 8.83 4.21001 9.75 3.72001 10.7C5.33001 11.51 9.77001 13.94 10.56 16.35C10.71 16.81 10.72 17.25 10.6 17.66C11.08 18.02 12.51 19.28 13.11 21.73C13.16 21.73 13.21 21.73 13.27 21.73C13.78 21.73 14.29 21.77 14.8 21.86C15.32 18.38 13.85 15.07 13.45 14.26C13.3 14.33 13.14 14.38 12.97 14.42C12.86 14.44 12.75 14.46 12.64 14.46C10.27 14.46 6.60001 9.61 5.43001 7.98L5.42001 7.97ZM9.40001 3.98C8.48001 4.66 7.63001 5.43 6.85001 6.26C6.73001 6.39 6.60001 6.53 6.48001 6.67C7.49001 7.48 8.46001 8.32 9.42001 9.18L10.92 10.52L11.29 10.85L11.47 11.01C11.53 11.05 11.59 11.11 11.64 11.14C11.74 11.21 11.86 11.26 11.89 11.26C11.89 11.26 11.89 11.26 11.87 11.26C11.85 11.26 11.82 11.28 11.8 11.3C11.75 11.35 11.76 11.39 11.76 11.36C11.76 11.34 11.76 11.29 11.74 11.24L11.68 11.01L11.53 10.54L11.22 9.59L10.58 7.69C10.17 6.46 9.77001 5.22 9.40001 3.97V3.98ZM10.3 3.35C10.1 3.48 9.90001 3.62 9.70001 3.76L9.68001 3.78C10.25 4.99 10.76 6.22 11.25 7.45C11.5 8.07 11.74 8.7 11.97 9.33C12.09 9.65 12.2 9.96 12.31 10.28L12.47 10.77L12.55 11.03C12.58 11.14 12.6 11.26 12.59 11.41C12.59 11.48 12.57 11.57 12.54 11.66C12.51 11.75 12.45 11.85 12.36 11.93C12.27 12.01 12.17 12.06 12.07 12.09C11.97 12.11 11.88 12.11 11.81 12.11C11.65 12.09 11.54 12.05 11.43 12C11.32 11.95 11.23 11.89 11.15 11.83C11.06 11.77 11 11.71 10.93 11.65L10.74 11.48L10.37 11.14C9.88001 10.68 9.40001 10.21 8.92001 9.74C8.01001 8.83 7.11001 7.91 6.26001 6.95C6.08001 7.16 5.90001 7.38 5.73001 7.6C7.30001 9.83 10.98 14.38 12.87 13.97C13.39 13.86 13.73 13.57 13.9 13.11C14.77 10.76 11.2 4.74 10.31 3.38L10.3 3.35ZM12.41 2.15C11.82 2.44 11.24 2.75 10.69 3.1C11.61 4.53 15.07 10.28 14.42 12.98C14.32 13.4 14.13 13.74 13.84 13.98C14.24 14.76 15.83 18.21 15.26 21.94C15.66 22.04 16.05 22.17 16.43 22.34C16.7 22.46 16.96 22.61 17.21 22.77C17.66 21.56 18.87 17.57 18.1 11.43H18.08C15.07 11.43 12.86 3.79 12.42 2.15H12.41ZM17.52 0.55C17.23 0.6 16.94 0.65 16.65 0.71C15.74 0.9 14.84 1.17 13.96 1.49C14.62 2.58 15.25 3.69 15.86 4.8C16.19 5.39 16.51 5.99 16.83 6.59L17.31 7.49C17.39 7.63 17.47 7.77 17.56 7.9C17.6 7.96 17.65 8.02 17.68 8.06C17.7 8.08 17.71 8.09 17.71 8.09C17.71 8.09 17.7 8.09 17.67 8.07C17.65 8.07 17.64 8.07 17.61 8.06C17.58 8.06 17.56 8.06 17.52 8.06C17.49 8.06 17.46 8.08 17.44 8.09C17.43 8.09 17.42 8.11 17.41 8.11C17.41 8.11 17.4 8.12 17.39 8.13C17.38 8.15 17.37 8.15 17.37 8.16V8.17C17.37 8.18 17.37 8.16 17.38 8.14C17.39 8.09 17.41 8.02 17.41 7.95C17.43 7.8 17.44 7.64 17.44 7.48C17.44 7.15 17.44 6.81 17.44 6.47C17.44 5.79 17.44 5.11 17.44 4.44C17.44 3.15 17.47 1.86 17.53 0.57L17.52 0.55ZM18.67 0.4C18.4 0.43 18.13 0.46 17.86 0.5C17.97 1.8 18.04 3.11 18.1 4.42C18.13 5.1 18.15 5.78 18.18 6.46C18.18 6.8 18.2 7.13 18.2 7.49C18.2 7.67 18.2 7.85 18.17 8.04C18.16 8.14 18.15 8.23 18.12 8.35C18.1 8.41 18.09 8.47 18.04 8.55C18.04 8.57 18.02 8.59 18 8.62C17.98 8.64 17.97 8.67 17.94 8.69C17.93 8.7 17.91 8.72 17.9 8.73C17.88 8.74 17.86 8.76 17.84 8.77C17.8 8.79 17.75 8.81 17.7 8.82C17.65 8.83 17.6 8.83 17.55 8.82C17.5 8.82 17.47 8.8 17.43 8.79C17.37 8.77 17.32 8.74 17.28 8.71C17.21 8.66 17.16 8.61 17.12 8.57C17.04 8.48 16.99 8.4 16.93 8.32C16.83 8.16 16.74 8.01 16.66 7.85L16.19 6.94C15.89 6.33 15.58 5.73 15.28 5.11C14.71 3.95 14.16 2.79 13.64 1.61C13.43 1.69 13.22 1.78 13.01 1.87C12.96 1.89 12.9 1.92 12.85 1.94C13.59 4.76 15.84 11.31 18.27 10.94C18.52 10.9 18.72 10.76 18.89 10.52C20.24 8.58 18.89 1.48 18.67 0.4ZM21.7 0.36C21.29 0.33 20.87 0.32 20.46 0.32C20.02 0.32 19.58 0.34 19.15 0.37C19.41 1.67 20.74 8.71 19.28 10.8C19.09 11.08 18.85 11.27 18.57 11.37C19.4 17.91 18.05 21.98 17.61 23.08C17.68 23.14 17.75 23.2 17.82 23.26C18.23 23.64 18.58 24.08 18.86 24.57C19.14 25.06 19.32 25.59 19.46 26.13L19.55 26.54C19.58 26.67 19.59 26.81 19.61 26.95C19.63 27.09 19.65 27.22 19.66 27.36L19.68 27.77C19.71 28.32 19.68 28.88 19.59 29.42C19.51 29.97 19.38 30.5 19.2 31.02C18.85 32.06 18.35 33.04 17.76 33.95C17.17 34.86 16.49 35.7 15.75 36.49C15.38 36.88 15 37.26 14.6 37.63C14.4 37.81 14.2 37.99 13.99 38.17C13.95 38.2 13.92 38.23 13.89 38.25C14.78 38.59 15.7 38.86 16.64 39.06C17.07 39.15 17.5 39.22 17.93 39.28L17.97 39.26C17.97 39.26 19.58 38.27 20.3 34.86L20.53 33.78L20.76 34.86C21.27 37.2 22.39 38.87 23 39.28C23.42 39.22 23.84 39.15 24.26 39.06C25.18 38.87 26.08 38.6 26.96 38.27C26.93 38.25 26.9 38.22 26.85 38.17C26.64 38 26.44 37.81 26.24 37.63C25.84 37.26 25.46 36.89 25.09 36.49C24.35 35.7 23.67 34.86 23.08 33.95C22.49 33.04 21.98 32.06 21.64 31.02C21.46 30.5 21.34 29.96 21.25 29.42C21.16 28.88 21.14 28.32 21.16 27.77L21.18 27.36C21.18 27.22 21.21 27.09 21.23 26.95C21.25 26.81 21.26 26.68 21.29 26.54L21.38 26.13C21.52 25.6 21.69 25.06 21.98 24.57C22.25 24.08 22.6 23.63 23.02 23.26C23.09 23.2 23.16 23.14 23.23 23.08C22.79 21.98 21.44 17.91 22.27 11.37C21.99 11.27 21.75 11.09 21.56 10.8C20.11 8.71 21.44 1.66 21.7 0.37V0.36ZM26.89 1.48C26.04 1.16 25.16 0.9 24.26 0.72C23.95 0.65 23.64 0.6 23.32 0.55C23.38 1.85 23.4 3.14 23.41 4.43C23.41 5.11 23.41 5.79 23.41 6.47C23.41 6.81 23.4 7.15 23.41 7.48C23.41 7.64 23.42 7.8 23.44 7.95C23.44 8.02 23.46 8.09 23.47 8.14C23.47 8.16 23.49 8.18 23.48 8.17C23.48 8.17 23.48 8.17 23.48 8.16C23.48 8.16 23.48 8.15 23.46 8.13C23.46 8.13 23.45 8.12 23.44 8.11C23.44 8.11 23.42 8.09 23.41 8.09C23.39 8.08 23.36 8.07 23.33 8.06C23.3 8.06 23.27 8.06 23.24 8.06C23.21 8.06 23.2 8.06 23.18 8.07C23.16 8.07 23.14 8.09 23.14 8.09C23.14 8.09 23.15 8.09 23.17 8.06C23.21 8.02 23.25 7.96 23.29 7.9C23.37 7.78 23.46 7.63 23.54 7.49L24.02 6.59C24.34 5.99 24.66 5.39 24.99 4.8C25.61 3.68 26.24 2.57 26.9 1.47L26.89 1.48ZM28 1.93L27.9 1.89C27.67 1.79 27.44 1.7 27.21 1.61C26.69 2.8 26.13 3.96 25.56 5.13C25.26 5.74 24.95 6.35 24.65 6.96L24.18 7.87C24.1 8.02 24.01 8.18 23.91 8.34C23.86 8.42 23.8 8.5 23.72 8.59C23.68 8.63 23.64 8.68 23.56 8.73C23.53 8.75 23.48 8.78 23.41 8.81C23.37 8.82 23.34 8.83 23.29 8.84C23.24 8.84 23.19 8.84 23.14 8.84C23.09 8.83 23.04 8.81 23 8.79C22.98 8.78 22.96 8.76 22.94 8.75C22.93 8.74 22.91 8.73 22.9 8.71C22.87 8.68 22.85 8.66 22.84 8.64C22.82 8.62 22.81 8.59 22.8 8.57C22.75 8.49 22.74 8.43 22.72 8.37C22.69 8.25 22.68 8.16 22.67 8.06C22.65 7.87 22.64 7.69 22.64 7.51C22.64 7.16 22.65 6.83 22.66 6.48C22.69 5.8 22.7 5.12 22.74 4.44C22.8 3.13 22.87 1.82 22.98 0.52C22.71 0.48 22.44 0.45 22.17 0.43C21.96 1.5 20.6 8.61 21.95 10.55C22.12 10.8 22.32 10.93 22.57 10.97C25.01 11.34 27.27 4.76 28 1.95V1.93ZM30.17 3.08C29.61 2.73 29.03 2.42 28.44 2.13C28.01 3.73 25.79 11.43 22.77 11.43H22.75C21.97 17.58 23.19 21.56 23.64 22.77C23.89 22.6 24.15 22.46 24.42 22.34C24.8 22.17 25.19 22.04 25.59 21.94C25.02 18.2 26.61 14.76 27.01 13.98C26.73 13.74 26.54 13.4 26.43 12.98C25.78 10.27 29.28 4.48 30.18 3.08H30.17ZM34.39 6.64C34.28 6.51 34.17 6.39 34.05 6.27C33.26 5.42 32.39 4.64 31.45 3.95C31.08 5.21 30.68 6.45 30.27 7.69L29.63 9.59L29.32 10.54L29.17 11.01L29.11 11.24C29.1 11.29 29.09 11.34 29.09 11.36C29.09 11.38 29.09 11.35 29.05 11.3C29.03 11.28 28.99 11.26 28.98 11.26C28.96 11.26 28.96 11.26 28.97 11.26C29 11.26 29.12 11.21 29.22 11.14C29.27 11.11 29.33 11.05 29.39 11.01L29.57 10.85L29.94 10.52L31.44 9.18C32.41 8.32 33.39 7.47 34.41 6.65L34.39 6.64ZM35.14 7.54C34.97 7.32 34.79 7.11 34.61 6.9C33.75 7.87 32.84 8.8 31.93 9.71C31.45 10.18 30.97 10.65 30.48 11.11L30.11 11.45L29.92 11.62C29.85 11.68 29.78 11.74 29.7 11.8C29.62 11.86 29.52 11.92 29.42 11.97C29.31 12.02 29.19 12.07 29.04 12.08C28.96 12.08 28.87 12.08 28.78 12.06C28.68 12.04 28.57 11.98 28.49 11.9C28.4 11.82 28.34 11.72 28.31 11.63C28.28 11.54 28.26 11.46 28.26 11.38C28.26 11.23 28.28 11.11 28.31 11L28.39 10.74L28.55 10.25C28.66 9.93 28.77 9.61 28.89 9.3C29.12 8.67 29.36 8.04 29.61 7.42C30.11 6.18 30.63 4.94 31.19 3.72C30.98 3.58 30.78 3.43 30.57 3.3C29.7 4.62 26.09 10.69 26.96 13.05C27.13 13.51 27.47 13.8 27.99 13.91C29.89 14.33 33.59 9.73 35.15 7.51L35.14 7.54ZM37.15 10.67C36.66 9.72 36.08 8.8 35.44 7.93C34.3 9.52 30.6 14.43 28.21 14.43C28.1 14.43 27.98 14.42 27.88 14.39C27.71 14.35 27.54 14.3 27.4 14.23C27 15.05 25.52 18.36 26.05 21.83C26.56 21.74 27.07 21.7 27.58 21.7C27.63 21.7 27.68 21.7 27.74 21.7C28.34 19.25 29.78 17.99 30.25 17.63C30.13 17.22 30.14 16.78 30.29 16.32C31.08 13.89 35.58 11.45 37.16 10.65L37.15 10.67ZM39.04 16.18C38.81 14.95 38.48 13.75 38.02 12.59L37.98 12.49C37.27 13.14 36.53 13.77 35.8 14.4C35.35 14.79 34.88 15.18 34.42 15.56L33.74 16.14C33.63 16.23 33.51 16.34 33.43 16.42C33.38 16.46 33.34 16.51 33.31 16.55C33.27 16.59 33.25 16.63 33.24 16.65C33.24 16.64 33.24 16.64 33.24 16.61C33.24 16.58 33.24 16.56 33.24 16.52C33.23 16.48 33.21 16.45 33.19 16.43C33.16 16.4 33.16 16.39 33.14 16.38C33.12 16.38 33.13 16.38 33.12 16.37C33.12 16.37 33.12 16.37 33.14 16.37C33.21 16.39 33.35 16.4 33.49 16.39C33.77 16.39 34.08 16.36 34.37 16.35C34.97 16.32 35.57 16.28 36.17 16.26C37.12 16.22 38.08 16.18 39.03 16.18H39.04ZM39.25 17.62C39.21 17.28 39.17 16.95 39.11 16.62C38.15 16.78 37.19 16.9 36.23 17C35.63 17.07 35.03 17.12 34.43 17.18C34.13 17.2 33.83 17.23 33.51 17.24C33.34 17.24 33.18 17.24 32.96 17.2C32.93 17.2 32.9 17.19 32.87 17.18C32.84 17.17 32.81 17.16 32.77 17.14C32.73 17.12 32.7 17.11 32.65 17.07C32.6 17.03 32.56 17.01 32.52 16.94C32.43 16.83 32.39 16.66 32.4 16.55C32.4 16.49 32.42 16.45 32.43 16.4C32.44 16.35 32.46 16.33 32.47 16.29C32.53 16.17 32.59 16.08 32.65 16.01C32.71 15.94 32.77 15.87 32.83 15.81C32.96 15.68 33.07 15.6 33.19 15.49C33.43 15.29 33.66 15.1 33.9 14.92C34.38 14.55 34.85 14.18 35.34 13.82C36.15 13.22 36.97 12.63 37.81 12.07C37.67 11.74 37.52 11.41 37.36 11.08C35.83 11.86 31.45 14.23 30.73 16.47C30.57 16.96 30.6 17.41 30.83 17.82C31.7 19.38 36.71 18.33 39.25 17.61V17.62ZM39.38 19.86C39.38 19.27 39.35 18.68 39.3 18.1C38 18.47 35.41 19.11 33.33 19.11C32.01 19.11 30.89 18.85 30.44 18.09C29.95 18.49 28.75 19.65 28.21 21.73C28.53 21.75 28.85 21.79 29.17 21.85C29.43 21.9 29.69 21.96 29.95 22.03C30.13 22.09 30.31 22.15 30.48 22.23C31.59 19.97 37.24 21.13 39.29 21.64C39.34 21.05 39.37 20.45 39.37 19.85L39.38 19.86Z" fill="black" />
                <path d="M79.82 8.48999C79.8 8.67999 79.78 8.89999 79.77 9.14999C79.75 9.48999 79.74 9.89999 79.72 10.36C79.71 10.83 79.7 11.37 79.7 12V15.15H81.33C82.65 15.07 84.26 14.77 85.16 13.72C85.92 12.83 86.06 11.27 85.6 10.19C85.21 9.26999 83.98 8.48999 83.02 8.48999H79.82ZM65.93 23.46C65.96 23.31 66 23.11 66.03 22.89C66.06 22.66 66.08 22.38 66.1 22.04C66.12 21.7 66.14 21.3 66.15 20.84C66.16 20.37 66.17 19.82 66.17 19.2V12.02C66.17 11.4 66.17 10.85 66.15 10.38C66.15 9.90999 66.12 9.50999 66.1 9.16999C66.08 8.82999 66.05 8.53999 66.03 8.31999C66 8.08999 65.97 7.89999 65.93 7.73999V7.69999C68.7 7.81999 71.64 7.82999 74.39 7.59999L73.97 8.87999H73.91C71.98 8.71999 69.91 8.62999 67.97 8.61999C67.95 8.77999 67.94 8.96999 67.93 9.16999C67.91 9.50999 67.9 9.90999 67.88 10.38C67.87 10.85 67.86 11.39 67.86 12.02V14.65C69.6 14.65 71.65 14.75 73.33 14.47V15.7C72.05 15.42 69.39 15.56 67.86 15.56V19.19C67.86 19.81 67.86 20.36 67.88 20.83C67.89 21.3 67.91 21.7 67.93 22.03C67.94 22.21 67.95 22.37 67.97 22.51C69.83 22.51 72.51 22.51 74.39 22.19L74.1 23.53C72.04 23.44 70.04 23.37 65.93 23.5V23.46ZM120.3 23.39L120.27 23.53H122.61L122.58 23.39C122.56 23.29 122.54 23.18 122.52 23.07C122.5 22.95 122.48 22.81 122.46 22.67C122.44 22.53 122.43 22.37 122.41 22.19C122.4 22.02 122.39 21.84 122.38 21.62C122.37 21.42 122.36 21.2 122.35 20.96C122.35 20.72 122.33 20.46 122.33 20.18C122.33 19.88 122.33 19.58 122.33 19.29V11.99C122.33 11.69 122.33 11.4 122.33 11.1C122.33 10.82 122.34 10.56 122.35 10.32C122.35 10.08 122.37 9.85999 122.38 9.64999C122.39 9.43999 122.4 9.24999 122.41 9.07999C122.42 8.89999 122.44 8.73999 122.46 8.58999C122.48 8.44999 122.5 8.30999 122.52 8.18999C122.54 8.06999 122.56 7.95999 122.58 7.85999L122.61 7.71999H120.27L120.3 7.85999C120.32 7.95999 120.34 8.05999 120.36 8.18999C120.38 8.30999 120.4 8.44999 120.41 8.59999C120.43 8.74999 120.44 8.89999 120.46 9.06999C120.48 9.23999 120.49 9.43999 120.5 9.65999C120.51 9.85999 120.52 10.08 120.52 10.31C120.52 10.55 120.53 10.8 120.54 11.08C120.54 11.38 120.54 11.68 120.54 11.97V19.27C120.54 19.56 120.54 19.86 120.54 20.16C120.54 20.44 120.54 20.7 120.52 20.94C120.52 21.17 120.51 21.39 120.5 21.59C120.49 21.8 120.48 21.99 120.46 22.17C120.44 22.35 120.43 22.5 120.41 22.63C120.39 22.78 120.37 22.92 120.36 23.04C120.34 23.16 120.32 23.27 120.3 23.37V23.39ZM113.07 22.79C112.66 22.81 112.24 22.82 111.8 22.82H111.66V11.98C111.66 11.68 111.66 11.38 111.66 11.09C111.66 10.81 111.67 10.55 111.68 10.32C111.68 10.08 111.7 9.84999 111.71 9.64999C111.72 9.43999 111.73 9.24999 111.75 9.07999C111.76 8.90999 111.78 8.74999 111.79 8.60999C111.81 8.45999 111.83 8.31999 111.85 8.19999C111.87 8.07999 111.89 7.96999 111.91 7.86999L111.94 7.72999H109.67L109.7 7.86999C109.72 7.96999 109.74 8.07999 109.76 8.19999C109.78 8.32999 109.8 8.46999 109.82 8.62999C109.84 8.76999 109.85 8.91999 109.86 9.07999C109.88 9.24999 109.89 9.43999 109.9 9.64999C109.91 9.84999 109.92 10.07 109.93 10.32C109.93 10.56 109.94 10.81 109.95 11.09C109.95 11.39 109.95 11.69 109.95 11.98V19.28C109.95 19.57 109.95 19.87 109.95 20.17C109.95 20.45 109.95 20.71 109.93 20.95C109.93 21.19 109.91 21.41 109.9 21.61C109.89 21.81 109.88 22 109.86 22.18C109.85 22.36 109.83 22.52 109.81 22.66C109.79 22.8 109.77 22.93 109.75 23.06C109.73 23.18 109.71 23.29 109.69 23.39L109.66 23.53C111.77 23.53 113.78 23.53 115.89 23.56H116.25C116.66 23.58 117.07 23.6 117.48 23.61L117.75 22.13C117.55 22.18 117.33 22.23 117.11 22.28C116.81 22.34 116.51 22.4 116.18 22.45C115.91 22.5 115.6 22.54 115.27 22.59C114.94 22.63 114.59 22.67 114.23 22.71C113.85 22.75 113.46 22.77 113.05 22.79H113.07ZM100.11 23.03C99.72 23.11 99.32 23.14 98.89 23.14C98.36 23.14 97.86 23.09 97.4 22.98C96.93 22.87 96.5 22.71 96.09 22.5C95.69 22.29 95.32 22.03 94.98 21.74C94.64 21.45 94.34 21.12 94.07 20.75C93.8 20.38 93.57 19.97 93.37 19.53C93.17 19.09 93.01 18.63 92.87 18.13C92.74 17.63 92.64 17.11 92.57 16.57C92.5 16.03 92.47 15.47 92.47 14.89C92.47 14.36 92.51 13.87 92.58 13.39C92.65 12.92 92.76 12.47 92.9 12.06C93.04 11.65 93.21 11.26 93.41 10.91C93.61 10.56 93.83 10.24 94.09 9.94999C94.34 9.65999 94.63 9.40999 94.93 9.18999C95.23 8.96999 95.56 8.77999 95.91 8.62999C96.26 8.47999 96.64 8.35999 97.02 8.28999C97.41 8.20999 97.81 8.17999 98.24 8.17999C98.77 8.17999 99.27 8.22999 99.73 8.33999C100.2 8.43999 100.63 8.59999 101.03 8.80999C101.43 9.01999 101.8 9.26999 102.13 9.54999C102.46 9.83999 102.77 10.17 103.04 10.54C103.31 10.91 103.54 11.31 103.74 11.74C103.94 12.17 104.11 12.64 104.24 13.14C104.37 13.64 104.48 14.16 104.54 14.7C104.61 15.24 104.64 15.8 104.64 16.38C104.64 16.91 104.6 17.41 104.53 17.88C104.46 18.35 104.35 18.8 104.21 19.21C104.07 19.63 103.9 20.01 103.7 20.37C103.5 20.72 103.28 21.05 103.02 21.34C102.76 21.63 102.49 21.89 102.18 22.11C101.88 22.33 101.55 22.52 101.19 22.68C100.83 22.83 100.46 22.95 100.08 23.03H100.11ZM100.03 7.60999C99.46 7.50999 98.87 7.45999 98.25 7.45999C97.84 7.45999 97.44 7.48999 97.07 7.53999C96.69 7.58999 96.32 7.66999 95.97 7.77999C95.62 7.88999 95.28 8.00999 94.95 8.15999C94.63 8.30999 94.32 8.46999 94.03 8.65999C93.74 8.84999 93.46 9.04999 93.21 9.26999C92.95 9.48999 92.71 9.72999 92.48 9.97999C92.25 10.24 92.05 10.5 91.86 10.78C91.67 11.06 91.5 11.35 91.34 11.66C91.18 11.96 91.05 12.28 90.93 12.6C90.81 12.92 90.71 13.25 90.63 13.59C90.55 13.93 90.49 14.27 90.45 14.62C90.41 14.96 90.39 15.31 90.39 15.66C90.39 16.28 90.44 16.87 90.55 17.43C90.66 17.99 90.82 18.53 91.03 19.03C91.24 19.54 91.5 20 91.79 20.43C92.09 20.86 92.42 21.26 92.8 21.62C93.18 21.98 93.59 22.3 94.04 22.58C94.49 22.86 94.97 23.1 95.49 23.29C96.01 23.49 96.56 23.64 97.12 23.73C97.69 23.83 98.28 23.88 98.9 23.88C99.31 23.88 99.71 23.85 100.08 23.8C100.46 23.75 100.82 23.67 101.18 23.56C101.53 23.46 101.87 23.33 102.19 23.19C102.51 23.04 102.82 22.88 103.11 22.7C103.4 22.52 103.67 22.31 103.94 22.09C104.2 21.87 104.44 21.63 104.67 21.38C104.9 21.13 105.11 20.86 105.3 20.58C105.49 20.3 105.67 20.01 105.82 19.71C105.98 19.41 106.11 19.1 106.23 18.78C106.35 18.46 106.45 18.13 106.53 17.79C106.61 17.45 106.67 17.11 106.71 16.76C106.75 16.42 106.77 16.07 106.77 15.72C106.77 15.1 106.72 14.52 106.61 13.96C106.5 13.4 106.34 12.86 106.13 12.35C105.92 11.84 105.66 11.37 105.37 10.94C105.07 10.51 104.74 10.11 104.36 9.74999C103.98 9.38999 103.57 9.06999 103.12 8.78999C102.67 8.50999 102.18 8.26999 101.66 8.05999C101.14 7.85999 100.59 7.70999 100.03 7.60999ZM61.21 19.98L49.79 7.72999H49.51C49.51 11.58 49.51 15.43 49.51 19.28C49.51 19.57 49.51 19.86 49.51 20.17C49.51 20.45 49.51 20.71 49.49 20.95C49.49 21.19 49.47 21.41 49.46 21.61C49.45 21.81 49.44 22 49.42 22.18C49.4 22.36 49.39 22.52 49.37 22.66C49.35 22.8 49.33 22.93 49.31 23.06C49.29 23.18 49.27 23.29 49.25 23.38L49.22 23.52H50.88L50.85 23.38C50.83 23.28 50.81 23.17 50.79 23.06C50.77 22.94 50.75 22.8 50.73 22.66C50.71 22.52 50.7 22.36 50.68 22.18C50.67 22 50.65 21.81 50.64 21.59C50.63 21.4 50.62 21.18 50.61 20.95C50.61 20.71 50.6 20.45 50.59 20.17C50.59 19.87 50.59 19.57 50.59 19.28V11.26L62.34 23.75H62.53V11.98C62.53 11.69 62.53 11.39 62.53 11.09C62.53 10.81 62.54 10.55 62.55 10.32C62.55 10.08 62.57 9.85999 62.58 9.64999C62.59 9.43999 62.61 9.24999 62.62 9.07999C62.63 8.90999 62.65 8.74999 62.66 8.60999C62.68 8.45999 62.7 8.31999 62.72 8.19999C62.74 8.07999 62.76 7.96999 62.78 7.86999L62.81 7.72999H61.15L61.18 7.86999C61.2 7.96999 61.22 8.07999 61.24 8.19999C61.26 8.31999 61.28 8.44999 61.3 8.59999C61.32 8.74999 61.33 8.90999 61.35 9.07999C61.36 9.24999 61.38 9.43999 61.39 9.64999C61.4 9.84999 61.41 10.07 61.42 10.32C61.42 10.56 61.43 10.81 61.44 11.09C61.44 11.39 61.44 11.69 61.44 11.98V20.23L61.2 19.97L61.21 19.98ZM77.81 23.48C77.84 23.33 77.88 23.13 77.91 22.91C77.94 22.68 77.96 22.4 77.98 22.06C78 21.72 78.02 21.32 78.03 20.85C78.04 20.38 78.05 19.83 78.05 19.21V12.02C78.05 11.39 78.05 10.85 78.03 10.38C78.03 9.90999 78 9.50999 77.98 9.16999C77.96 8.82999 77.93 8.53999 77.91 8.30999C77.88 8.07999 77.85 7.88999 77.81 7.72999V7.68999C79.52 7.68999 81.24 7.66999 82.94 7.68999C83.95 7.68999 84.84 7.81999 85.78 8.24999C86.04 8.36999 86.27 8.50999 86.48 8.65999C86.68 8.80999 86.86 8.96999 87.01 9.15999C87.16 9.33999 87.29 9.53999 87.39 9.75999C87.49 9.97999 87.57 10.22 87.62 10.48C87.67 10.74 87.7 11.02 87.7 11.32C87.7 11.87 87.61 12.37 87.42 12.82C87.23 13.27 86.95 13.67 86.57 14.03C86.19 14.39 85.71 14.7 85.14 14.97C84.56 15.24 83.89 15.46 83.12 15.63L82.98 15.66L89.24 23.53H86.68C86.51 23.28 86.31 22.95 86.14 22.68C86.01 22.49 85.87 22.28 85.71 22.06C85.55 21.84 85.38 21.6 85.2 21.35C85.02 21.1 84.81 20.83 84.59 20.55L80.95 15.76H79.71V19.22C79.71 19.85 79.71 20.39 79.73 20.86C79.74 21.33 79.76 21.73 79.78 22.07C79.8 22.41 79.83 22.69 79.86 22.92C79.89 23.15 79.92 23.34 79.96 23.49V23.54H77.82V23.49L77.81 23.48Z" fill="black" />
                <path d="M49.67 30.48H50.82C51.25 30.48 51.58 30.39 51.81 30.2C52.04 30.01 52.15 29.75 52.15 29.4C52.15 29.05 52.04 28.78 51.81 28.59C51.58 28.4 51.25 28.3 50.82 28.3H49.67V30.47V30.48ZM49.21 32.25V27.91H50.84C51.21 27.91 51.52 27.97 51.79 28.09C52.05 28.21 52.26 28.38 52.4 28.6C52.54 28.82 52.61 29.09 52.61 29.4C52.61 29.71 52.54 29.97 52.4 30.19C52.26 30.41 52.05 30.58 51.79 30.7C51.53 30.82 51.21 30.88 50.84 30.88H49.67V32.25H49.21ZM61.68 31.88C61.94 31.88 62.18 31.84 62.4 31.75C62.62 31.66 62.81 31.53 62.98 31.37C63.14 31.21 63.27 31.02 63.36 30.8C63.45 30.58 63.5 30.34 63.5 30.08C63.5 29.82 63.45 29.58 63.36 29.36C63.27 29.14 63.14 28.95 62.98 28.79C62.82 28.63 62.62 28.5 62.4 28.41C62.18 28.32 61.94 28.28 61.68 28.28C61.42 28.28 61.18 28.32 60.95 28.41C60.73 28.5 60.53 28.63 60.37 28.79C60.21 28.95 60.08 29.14 59.99 29.36C59.9 29.58 59.85 29.82 59.85 30.08C59.85 30.34 59.9 30.57 59.99 30.79C60.08 31.01 60.21 31.2 60.37 31.36C60.53 31.52 60.73 31.65 60.95 31.74C61.17 31.83 61.42 31.87 61.68 31.87V31.88ZM61.68 32.29C61.35 32.29 61.05 32.24 60.77 32.13C60.49 32.02 60.25 31.87 60.04 31.66C59.84 31.46 59.68 31.23 59.56 30.96C59.45 30.69 59.39 30.4 59.39 30.08C59.39 29.76 59.45 29.47 59.56 29.2C59.67 28.93 59.83 28.7 60.04 28.5C60.24 28.3 60.49 28.14 60.76 28.03C61.04 27.92 61.34 27.87 61.67 27.87C62 27.87 62.3 27.92 62.58 28.03C62.86 28.14 63.1 28.29 63.3 28.49C63.51 28.69 63.66 28.92 63.78 29.19C63.89 29.46 63.95 29.75 63.95 30.07C63.95 30.39 63.89 30.68 63.78 30.95C63.67 31.22 63.51 31.45 63.3 31.65C63.1 31.85 62.85 32 62.58 32.11C62.3 32.22 62 32.27 61.67 32.27L61.68 32.29ZM82.18 32.25V28.3H80.65V27.9H84.16V28.3H82.63V32.25H82.17H82.18ZM85.71 32.25V27.91H86.17V32.25H85.71ZM54.94 30.44H56.09C56.52 30.44 56.85 30.34 57.08 30.15C57.31 29.96 57.42 29.69 57.42 29.35C57.42 29.01 57.31 28.73 57.08 28.54C56.85 28.35 56.52 28.25 56.09 28.25H54.94V30.43V30.44ZM54.48 32.21V27.87H56.11C56.48 27.87 56.79 27.93 57.06 28.05C57.32 28.17 57.53 28.34 57.67 28.56C57.81 28.78 57.88 29.05 57.88 29.36C57.88 29.67 57.81 29.93 57.67 30.15C57.53 30.37 57.32 30.54 57.06 30.66C57.01 30.68 56.95 30.71 56.89 30.72L56.98 30.85L57.95 32.21H57.45L56.56 30.95L56.46 30.81C56.35 30.82 56.23 30.83 56.11 30.83H54.94V32.21H54.48ZM66.26 30.47H67.41C67.84 30.47 68.17 30.38 68.4 30.19C68.63 30 68.74 29.74 68.74 29.39C68.74 29.04 68.63 28.77 68.4 28.58C68.17 28.39 67.84 28.29 67.41 28.29H66.26V30.46V30.47ZM65.8 32.24V27.9H67.43C67.8 27.9 68.11 27.96 68.38 28.08C68.64 28.2 68.85 28.37 68.99 28.59C69.13 28.81 69.2 29.08 69.2 29.39C69.2 29.7 69.13 29.96 68.99 30.18C68.85 30.4 68.64 30.57 68.38 30.69C68.12 30.81 67.8 30.87 67.43 30.87H66.26V32.24H65.8ZM76.49 30.43H77.64C78.07 30.43 78.4 30.33 78.63 30.14C78.86 29.95 78.97 29.68 78.97 29.34C78.97 29 78.86 28.72 78.63 28.53C78.4 28.34 78.07 28.24 77.64 28.24H76.49V30.42V30.43ZM76.03 32.2V27.86H77.66C78.03 27.86 78.34 27.92 78.61 28.04C78.87 28.16 79.08 28.33 79.22 28.55C79.36 28.77 79.43 29.04 79.43 29.35C79.43 29.66 79.36 29.92 79.22 30.14C79.08 30.36 78.87 30.53 78.61 30.65C78.56 30.67 78.5 30.7 78.44 30.71L78.53 30.84L79.5 32.2H79L78.11 30.94L78.01 30.8C77.9 30.81 77.78 30.82 77.66 30.82H76.49V32.2H76.03ZM71.53 31.8H74.14V32.2H71.07V27.86H74.05V28.26H71.53V29.81H73.78V30.2H71.53V31.81V31.8ZM88.86 31.8H91.47V32.2H88.4V27.86H91.38V28.26H88.86V29.81H91.11V30.2H88.86V31.81V31.8ZM94.56 32.27C94.24 32.27 93.93 32.22 93.63 32.11C93.33 32 93.11 31.87 92.94 31.7L93.12 31.35C93.27 31.5 93.48 31.62 93.74 31.73C94 31.83 94.27 31.88 94.56 31.88C94.85 31.88 95.06 31.85 95.23 31.78C95.4 31.71 95.53 31.62 95.61 31.5C95.69 31.38 95.73 31.26 95.73 31.11C95.73 30.94 95.68 30.8 95.58 30.7C95.48 30.6 95.36 30.51 95.2 30.45C95.04 30.39 94.87 30.34 94.68 30.29C94.49 30.24 94.3 30.2 94.11 30.14C93.92 30.09 93.74 30.02 93.59 29.93C93.43 29.84 93.3 29.73 93.21 29.59C93.11 29.45 93.06 29.26 93.06 29.03C93.06 28.81 93.12 28.62 93.23 28.44C93.34 28.26 93.52 28.12 93.75 28.01C93.99 27.9 94.29 27.85 94.66 27.85C94.9 27.85 95.15 27.88 95.39 27.95C95.63 28.02 95.84 28.11 96.01 28.23L95.85 28.6C95.66 28.48 95.47 28.38 95.26 28.33C95.05 28.27 94.85 28.24 94.65 28.24C94.39 28.24 94.17 28.28 94 28.35C93.83 28.42 93.71 28.51 93.62 28.63C93.54 28.75 93.5 28.88 93.5 29.03C93.5 29.2 93.55 29.34 93.65 29.44C93.75 29.54 93.88 29.62 94.03 29.68C94.19 29.74 94.36 29.79 94.55 29.84C94.74 29.89 94.93 29.94 95.12 29.99C95.31 30.04 95.48 30.11 95.64 30.2C95.8 30.28 95.93 30.4 96.03 30.54C96.13 30.68 96.18 30.86 96.18 31.09C96.18 31.3 96.12 31.5 96.01 31.68C95.89 31.86 95.72 32 95.48 32.11C95.24 32.22 94.94 32.27 94.56 32.27Z" fill="black" />
            </g>
            <defs>
                <clipPath id="clip0_348_1652">
                    <rect width="122.61" height="39.74" fill="white" />
                </clipPath>
            </defs>
        </svg>
    )
};
export default Logo
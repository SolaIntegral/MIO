import './styles/main.css';
import { App } from './app';

// アプリケーションの初期化
document.addEventListener('DOMContentLoaded', () => {
    new App();
});

// グローバル型定義
declare global {
    interface Window {
        app: App;
    }
}

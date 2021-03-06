# Score-Visualizer

手積みの麻雀にて，点数計算や点棒管理を便利にする

## 開発環境構築 インストール編

PHPのインストール

https://weblabo.oscasierra.net/php-56-windows-install/

Composerのインストール

https://weblabo.oscasierra.net/php-composer-windows-install/

Node.jsのインストール

https://qiita.com/taiponrock/items/9001ae194571feb63a5e

## 開発時に使うコマンド

初めに以下のコマンドを使用してください

```
composer install
```

```
npm install
```

ローカルサーバーを立てるコマンド

```
php artisan serve
```

.jsファイルの変更を監視するコマンド

```
npm run watch-poll
```

## 設定ファイル(.env)

githubにはセキュリティ上.envファイルをアップロードしていないのでSlackでアップロードしているファイルをダウンロードしてルートディレクト直下(laravelAppの直下)に.envファイルを配置してください

Slackからダウンロードしたenvファイルはドットが抜けているのでファイル名を「.env」に変更してから配置してください

## データベースのマイグレーション

マイグレーションを行うコマンド

```
php artisan migrate
```

初期データ格納を行うコマンド

```
php artisan db:seed
```

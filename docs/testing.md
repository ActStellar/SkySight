# テスト戦略

## **1. テストの目的**

- 開発したコンポーネントやフック、APIの正確な動作を保証するため。
- 想定されるエラーや異常な入力に対してもアプリケーションが正しく動作することを確認する。
- UIやデータフロー全体が、使用技術に依存する不具合なく期待通りに機能することを検証する。

---

## **2. テストの種類**

### 1. **ユニットテスト**

- **対象**: コンポーネントとフック。
- **ツール**: `Jest` + `React Testing Library`。
- **目的**: 各コンポーネントやフックの単体機能を検証する。

### 2. **統合テスト**

- **対象**: 複数のコンポーネント間の連携。
- **ツール**: `Jest`。
- **目的**: 複数のコンポーネントが連携して正しく動作することを確認する。

### 3. **エンドツーエンド (E2E) テスト**

- **対象**: 全体のユーザーフロー。
- **ツール**: `Cypress` (将来的に実施)。
- **目的**: ユーザーの観点から、アプリケーションが期待通りに動作するかを確認する。

---

## **3. 使用ライブラリと設定**

### **必要な依存ライブラリ**

```bash
npm install --save-dev jest @testing-library/react @testing-library/jest-dom @testing-library/user-event jest-canvas-mock
```

### `jest.config.js`

```javascript
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  testEnvironment: 'jest-environment-jsdom',
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/$1',
  },
};

module.exports = createJestConfig(customJestConfig);
```

### `jest.setup.js`

```javascript
import '@testing-library/jest-dom';
import 'jest-canvas-mock';

// ResizeObserver のモック
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;
```

---

## **4. テストの実施手順**

### 1. **テストの実行**

```bash
npm run test
```

### 2. **実行結果の確認**

- テストがすべてパスすることを確認します。
- 失敗した場合は、エラーメッセージをもとにコードやテストを修正します。

## **5. テストケースの詳細**

### **1. ユニットテスト: `Form.tsx`**

- **目的**: ユーザーが都市名を入力して検索できることを確認する。
- **確認項目**:
  - フォームが正常にレンダリングされること。
  - 入力した都市名が`onSearch`イベントに正しく渡されること。

### **2. ユニットテスト: `Chart.tsx`**

- **目的**: 天気予報データがグラフ形式で正しく表示されるかを確認する。
- **モック**: `jest-canvas-mock`を使用し、`canvas`要素のテストを可能にする。
- **エラー回避**: `chart.js`が使用する`ResizeObserver`を`jest`環境でモックする必要がある。

### **3. ユニットテスト: `WeatherCard.tsx`**

- **目的**: APIから取得した天気情報が、カード形式で正確に表示されるかを確認する。
- **確認項目**:
  - カードが正常にレンダリングされること。
  - 気温や天気の説明が正しく表示されること。

### **4. フックテスト: `useWeather.ts`**

- **目的**: 天気APIからのデータ取得をフックが正しく管理できるかを確認する。
- **確認項目**:
  - データ取得中は`loading`状態が`true`になること。
  - データ取得が成功した場合、`currentWeather`と`weeklyForecast`にデータがセットされること。
  - エラーが発生した場合、`error`プロパティが正しいエラーメッセージを返すこと。

---

## **6. 追加情報**

### **jest-canvas-mockの導入**

- **目的**:  
  `react-chartjs-2`の`canvas`要素をテストで正しくモックするために導入しました。

### **ResizeObserverのモック**

- **目的**:  
  `chart.js`が使用する`ResizeObserver`は`jsdom`環境ではサポートされていません。そのため、`jest.setup.js`で`ResizeObserver`をモックする必要がありました。

---

## **7. 今後の改善点**

1. **Cypressの導入**
   - 将来的にエンドツーエンド（E2E）テストを導入し、ユーザーフロー全体をテストする予定です。

2. **カバレッジの拡張**
   - 現在のテストケースに加え、より多くのシナリオをカバーするテストケースを追加し、コードカバレッジを向上させます。

---

## **8. 結論**

テストのセットアップと実行が正しく行われ、主要なコンポーネントやフックが期待通りに動作することが確認されました。  
これにより、アプリケーションの品質が担保され、今後の機能拡張や修正にも安心して対応できる環境が整いました。  
さらに、Cypressを用いたE2Eテストの導入により、ユーザーフロー全体をテストし、アプリケーション全体の品質を向上させる予定です。

## 本地情景库

### 用法

#### 1. 使用 IDE 插件将情景数据注入到项目

- `src/standModel/sceneModel/LocalScene`

#### 2. 代码引用

```tsx
import LocalScene from '@/standModel/sceneModel/LocalScene';

export const Scene: React.FC<Props> = ({ style }) => {
  return (
    <View style={style} className={styles.list}>
      <LocalScene />
    </View>
  );
};
```

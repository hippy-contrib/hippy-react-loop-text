# hippy-text-loop-scroll-view hippy文字无限滚动组件

文字大于width宽度，将文字重复无限滚动展示。反之，则没有滚动
截图：
![示例截图](https://raw.githubusercontent.com/hippy-contrib/hippy-react-loop-text/master/image/text-loop.png)

## 安装
```
tnpm install @tencent/hippy-text-loop-scroll-view
```

## 示例

``` 
    <TextLoopScrollView
        frontImageUrl={ICON_MESSAGE} //滚动栏前面的icon图片
        scrollWidth={200} // 滚动栏内容宽度
        message={`滚动的文字`}
        onClickHandler={() => {
            console.log(`TextLoopScrollView click`)
        }}
    />
```


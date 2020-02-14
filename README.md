# hippy-text-loop-scroll-view hippy文字无限滚动组件

文字大于width宽度，将文字重复无限滚动展示。反之，则没有滚动
截图：
![示例截图](https://raw.githubusercontent.com/hippy-contrib/hippy-react-loop-text/master/image/text-loop.png)

## 安装
```
npm i hippy-react-loop-text
```

## 参数示例
引入之后就能使用了
``` 
    <TextLoopScrollView
        frontImageUrl={ICON_MESSAGE} //滚动栏前面的icon图片
        scrollWidth={200} // 滚动栏内容宽度
        message={`滚动的文字`}
        onClickHandler={() => {
            // 点击文案的回调函数
            console.log(`TextLoopScrollView click`)
        }}
    />
```

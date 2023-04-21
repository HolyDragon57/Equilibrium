<template>
    <div id="resume">
        <img src="../../assets/resume_prettier-wordart.png">
        <div id="pdf">
            test
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import html2Canvas from 'html2canvas';
import JsPDF from 'jspdf';

export default defineComponent({
    data() {
        return {

        }
    },
    methods: {
        download() {
            let pdfDom = document.getElementById('pdf')!
            // allowTaint: true 表示允许跨越的图片
            html2Canvas(pdfDom, { allowTaint: true }).then((canvas) => {
                // a4纸的正常尺寸是宽592.28，高是841.89
                const pageWidth = 592.28
                const pageHeight = 841.89
                // 设置内容的宽高
                const contentWidth = canvas.width
                const contentHeight = canvas.height
                // 默认的偏移量
                let position = 0
                // 设置生成图片的宽高
                const imgCanvasWidth = pageWidth
                const imgCanvasHeight = 592.28 / contentWidth * contentHeight
                let imageHeight = imgCanvasHeight
                // 生成canvas截图，1表示生成的截图质量（0-1）
                let pageData = canvas.toDataURL('image/jpeg', 1)
                // new JsPDF接收三个参数，landscape表示横向，（默认不填是纵向），打印单位和纸张尺寸
                let PDF = new JsPDF('landscape', 'pt', 'a4')
                // 当内容不超过a4纸一页的情况下
                if (imageHeight < pageHeight) {
                  PDF.addImage(pageData, 'JPEG', 20, 20, imgCanvasWidth, imgCanvasHeight)
                } else {
                  // 当内容超过a4纸一页的情况下，需要增加一页
                  while (imageHeight > 0) {
                    PDF.addImage(pageData, 'JPEG', 20, position, imgCanvasWidth, imgCanvasHeight)
                    imageHeight -= pageHeight
                    position -= pageHeight
                    // 避免添加空白页
                    if (imageHeight > 0) {
                      PDF.addPage()
                    }
                  }
                }
                // 调用save方法生成pdf文件
                let d = new Date(Date.now())
                PDF.save("Resume_" + d.getFullYear() + '-' + (d.getMonth()+1) + "-" + d.getDate() + '.pdf')
           })
      }
    }
})
</script>

<style>

#resume {
  display: flex;
  flex-direction: column;
}

#pdf {
    min-height: 400px;
    max-height: 800px;
    border: solid 1px gray;
}

</style>
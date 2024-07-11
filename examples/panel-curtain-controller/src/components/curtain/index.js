import "./index.tyss";
import curtainImage from '@/res/curtain.png';

Component({
    properties: {
        value: {
            type: Number,
            value: 0
        },
        control: {
            type: String,
            value: "" // open, close, stop, continue
        },
        work_state: {
            type: String,
            value: "" // opening, closing
        }
    },
    data: {
        curtainImage,
        animing: false,
        showPercent: false
    },
    methods: {
        onAnimationStart() {
            this.setData({
                animing: true
            })
        },
        onAnimationEnd() {
            this.setData({
                animing: false
            })
        },
        onSlidering() {
            this.setData({
                showPercent: true
            })
        },
        onSliderEnd() {
            this.setData({
                showPercent: false
            })
        }
    }

})
<template>
	<div class="mmProgress" ref="mmProgress" @click="barClick">
        <div class="mmProgress-bar"></div>
        <div class="mmProgress-inner" ref="mmProgressInner">
            <div class="mmProgress-dot" @mousedown="barDown"></div>
        </div>
	</div>
</template>

<script>
    //import mmProgress from './mmProgress'
    const dotWidth = 10;
	export default {
		name: "mmProgress",
        data(){
		    return {
                move: {
                    status: false,
                    startX: 0,
                    left: 0,
                },
            }
        },
        props: {
            percent: {
                type: [Number],
                default: 0
            },
        },
        mounted(){
            this.$nextTick(() => {
                this.bindEvents();
                const barWidth = this.$refs.mmProgress.clientWidth - dotWidth;
                const offsetWidth = this.percent * barWidth;
                this.moveSilde(offsetWidth)
            })
        },
        methods:{
            bindEvents(){
                document.addEventListener('mousemove',this.barMove);
                document.addEventListener('mouseup',this.barUp);
            },
            unbindEvents(){
                document.removeEventListener('mousemove',this.barMove)
                document.removeEventListener('mouseup',this.barUp)
            },
		    //点击事件
            barClick(e){
                let rect = this.$refs.mmProgress.getBoundingClientRect();
                let offsetWidth = Math.min(this.$refs.mmProgress.clientWidth - dotWidth,Math.max(0,e.clientX - rect.left));
                this.moveSilde(offsetWidth);
                this.commitPercent()
            },
            //鼠标按下事件
            barDown(e){
                this.move.status = true;
                this.move.startX = e.clientX;
                this.move.left = this.$refs.mmProgressInner.clientWidth
            },
            //鼠标移动事件
            barMove(e){
                if (!this.move.status) {
                    return false
                }
                let dist = e.clientX - this.move.startX;
                let offsetWidth = Math.min(this.$refs.mmProgress.clientWidth - dotWidth,Math.max(0,this.move.left + dist));
                this.moveSilde(offsetWidth)
                this.commitPercent()
            },
            //鼠标释放事件
            barUp(e){
                e.stopPropagation();
                this.move.status = false;
                //this.commitPercent()
            },
            //移动滑块
            moveSilde(offsetWidth){
                this.$refs.mmProgressInner.style.width = `${offsetWidth}px`
            },
            //修改percent
            commitPercent(){
                let lineWidth = this.$refs.mmProgress.clientWidth - dotWidth;
                let percent = this.$refs.mmProgressInner.clientWidth / lineWidth;
                this.$emit('percentChange', percent)
            }
        },
        watch:{
            percent(newPercent) {
                //console.log("newPercent",newPercent)
                if (newPercent >= 0 && !this.move.status) {
                    //console.log("newPercent",newPercent)
                    const barWidth = this.$refs.mmProgress.clientWidth - dotWidth;
                    const offsetWidth = newPercent * barWidth;
                    this.moveSilde(offsetWidth)
                }
            }
        },
        beforeDestroy () {
            this.unbindEvents()
        }
	}
</script>

<style lang="less">
	.mmProgress {
        position: relative;
        padding: 5px;
        user-select: none;
        cursor: pointer;
        .mmProgress-bar {
            height: 2px;
            width: 100%;
            background: #bbb;
        }
        .mmProgress-inner {
            position: absolute;
            top: 50%;
            left: 5px;
            display: inline-block;
            width: 0;
            height: 2px;
            margin-top: -1px;
            background: #fff;
            .mmProgress-dot {
                position: absolute;
                top: 50%;
                right: -5px;
                width: 10px;
                height: 10px;
                border-radius: 50%;
                background-color: #fff;
                transform: translateY(-50%);
            }
        }
	}
</style>

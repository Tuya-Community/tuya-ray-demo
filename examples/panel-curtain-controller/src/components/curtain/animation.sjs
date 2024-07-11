class AnimationTask {
    value = 0;
    animatedValue = 0;
    animId = 0;
    lastTime = 0;
    stopTime = 0;
    duration = 0;
    maxDuration = 0;
    startValue = 0;
    maxChangedValue = 1;

    onUpdate = null;
    onAnimationStart = null;
    onAnimationEnd = null;

    constructor(value = 0, maxDuration = 0, maxChangedValue = 1) {
        this.value = value;
        this.animatedValue = value;
        this.maxDuration = maxDuration;
        this.maxChangedValue = maxChangedValue;
    }

    startAnimation(value) {
        if (this.value === value || this.maxChangedValue === 0) return;
        const duration = this.maxDuration * Math.abs(value - this.animatedValue) / this.maxChangedValue;
        if (duration === 0) return this.setImmediate(value);
        this.value = value;
        this.lastTime = Date.now();
        this.startValue = this.animatedValue;
        this.stopTime = this.lastTime + duration;
        this.duration = duration;
        cancelAnimationFrame(this.animId);
        this.animId = requestAnimationFrame(this.animate.bind(this));
        this.onAnimationStart?.(this.animatedValue, this.value);
    }

    animate() {
        const now = Date.now();
        if (now >= this.stopTime || this.value === this.animatedValue) {
            this.animatedValue = this.value;
            this.onUpdate?.(this.animatedValue, this.value);
            this.onAnimationEnd?.(this.animatedValue, this.value);
            return;
        }
        const elapsed = now - this.lastTime;
        const progress = Math.min(1, elapsed / this.duration);
        const value = this.animatedValue + (this.value - this.startValue) * progress;
        this.animatedValue = value;
        this.onUpdate?.(this.animatedValue, this.value);
        this.lastTime = now;
        this.animId = requestAnimationFrame(this.animate.bind(this));
    }

    setImmediate(value) {
        this.lastTime = Date.now();
        this.animatedValue = value;
        this.value = value;
        this.onUpdate?.(this.animatedValue, this.value);
    }


    stopAnimation() {
        cancelAnimationFrame(this.animId);
        this.value = this.animatedValue;
        this.onAnimationEnd?.(this.animatedValue, this.value);
    }
}


module.exports = {
    AnimationTask
}
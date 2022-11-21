import Render from './index.rjs'
Component({
  lifetimes: {
    created: function () {
      this.render = new Render(this)
    },
    ready: function (e) {
      this.draw()
    },
  },
  methods: {
    draw() {
      this.render.draw([
        { genre: 'Sports', sold: Math.floor(Math.random() * 500) },
        { genre: 'Strategy', sold: Math.floor(Math.random() * 500) },
        { genre: 'Action', sold: Math.floor(Math.random() * 500) },
        { genre: 'Shooter', sold: Math.floor(Math.random() * 500) },
        { genre: 'Other', sold: Math.floor(Math.random() * 500) },
      ])
    },
  },
})

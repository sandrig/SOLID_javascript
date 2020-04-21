/*
  Single Responsibility Principle (Принцип единой ответственности)
  Какой-либо класс должен обладать только одной зоной ответственности.
  Основная идея заключается в том, что по мере роста вашего приложения,
  вам требуется большое количество функционала. К какому-то классу вы
  должны будете добавлять новый функционал, который возможно будет
  смешивать его изначальное поведение. Это будет не соотвествовать
  данному принципу, т.к. SRP говорит, что если есть другое поведение,
  то его нужно вынести в отдельный класс.
*/

// SRP нарушен, т.к. метод toHtml не относится к новости потому, что это отдельный шаблон
// class News {
//   constructor(title, text) {
//     this.title = title
//     this.text = text
//     this.modified = false
//   }
//
//   update(text) {
//     this.text = text
//     this.modified = true
//   }
//
//   toHtml() {
//     return `
//       <div class="news">
//         <h1>${this.title}</h1>
//         <p>${this.text}</p>
//       </div>
//     `
//   }
//
//   toJSON() {
//     return JSON.stringify({
//       title: this.title,
//       text: this.text,
//       modified: this.modified
//     }, null, 2)
//   }
// }
//
// const news = new News('Заголовок', 'Описание новости')
//
// console.log(news.toHtml());
// console.log(news.toJSON());

class News {
  constructor(title, text) {
    this.title = title
    this.text = text
    this.modified = false
  }

  update(text) {
    this.text = text
    this.modified = true
  }
}

class NewsPrinter {
  constructor(news) {
    this.news = news
  }

  html() {
    return `
      <div class="news">
        <h1>${this.news.title}</h1>
        <p>${this.news.text}</p>
      </div>
    `
  }

  json() {
    return JSON.stringify({
      title: this.news.title,
      text: this.news.text,
      modified: this.news.modified
    }, null, 2)
  }

  xml() {
    return `
      <news>
        <title>${this.news.title}</title>
        <text>${this.news.text}</text>
      </news>
    `
  }
}

const printer = new NewsPrinter(
  new News('Заголовок', 'Описание новости')
)

console.log(printer.html())
console.log(printer.xml())
console.log(printer.json())

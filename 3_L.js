/*
  Liskov Substitution Principle (Принцип подстановки Барбары Лисков)
  Функции, которые используют базовый тип должны уметь с ним
  взаимодействовать, плюс взаимодействовать с подтипами данного
  базового типа при этом ничего не зная про это.
*/

// Нарушение принципа LSP
// class Person {
//   access() {
//     console.log('У тебя есть доступ')
//   }
// }
//
// class Frontend extends Person {
//   canCreateFrontend() {}
// }
//
// class Backend extends Person {
//   canCreateBackend() {}
// }
//
// class PersonFromDifferentCompany extends Person {
//   access() {
//     throw new Error('У тебя нет доступа! Иди к себе!')
//   }
// }
//
// function openSecretDoor(person) {
//   person.access()
// }
//
// openSecretDoor(new Frontend())
// openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany())

class Person {

}

class Member extends Person {
  access() {
    console.log('У тебя есть доступ')
  }
}

class Guest extends Person {
  isGuest = true
}

class Frontend extends Member {
  canCreateFrontend() {}
}

class Backend extends Member {
  canCreateBackend() {}
}

class PersonFromDifferentCompany extends Guest {
  access() {
    throw new Error('У тебя нет доступа! Иди к себе!')
  }
}

function openSecretDoor(member) {
  member.access()
}

openSecretDoor(new Frontend())
openSecretDoor(new Backend())
// openSecretDoor(new PersonFromDifferentCompany())  // There should be member!

// ===============

// Нарушение принципа LSP
// class Component {
//   render() {
//     return `<div>Component</div>`
//   }
// }
//
// class HeaderComponent extends ComponentWithTemplate {
//   onInit() {}
// }
//
// class FooterComponent extends ComponentWithTemplate {
//   afterInit() {}
// }
//
// class HOC extends HigherOrderComponent {
//   render() {
//     throw new Error('Render is impossible here')
//   }
//
//   wrapComponent(component) {
//     component.wrapped = true
//     return component
//   }
// }
//
// renderComponent(new HeaderComponent())
// renderComponent(new FooterComponent())
// renderComponent(new HOC())

/*
  Теперь мы не нарушаем принцип LSP, потому что renderComponent
  работает с классом ComponentWithTemplate и запись renderComponent(new HOC())
  уже невозможна.
*/
class Component {
  isComponent = true
}

class ComponentWithTemplate extends Component {
  render() {
    return `<div>Component</div>`
  }
}

class HigherOrderComponent extends Component {

}

class HeaderComponent extends ComponentWithTemplate {
  onInit() {}
}

class FooterComponent extends ComponentWithTemplate {
  afterInit() {}
}

class HOC extends HigherOrderComponent {
  render() {
    throw new Error('Render is impossible here')
  }

  wrapComponent(component) {
    component.wrapped = true
    return component
  }
}

function renderComponent(component) {
  console.log(component.render())
}

renderComponent(new HeaderComponent())
renderComponent(new FooterComponent())
// renderComponent(new HOC())

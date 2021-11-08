// const newUser = {
//   id: newId,
//   name: userName,
// };

export class UserRegisterDto {
  name: string
  id: string
  constructor(id: string, name: string) {
    this.id = id
    this.name = name
  }
}

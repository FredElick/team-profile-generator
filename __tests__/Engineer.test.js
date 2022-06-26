const Engineer = require('../lib/Engineer');
test('creat engineer object', () =>{
    const engineer = new Engineer('John', '1', 'john@gmail.com','gitExample');
    expect(engineer.name).toBe('John');
    expect(engineer.id).toBe('1');
    expect(engineer.email).toBe('john@gmail.com');
    expect(engineer.github).toBe('gitExample');
})

test('get requests', () =>{
    const engineer = new Engineer('John', '1', 'john@gmail.com','gitExample');
    expect(engineer.getName()).toBe('John');
    expect(engineer.getId()).toBe('1');
    expect(engineer.getEmail()).toBe('john@gmail.com');
    expect(engineer.getRole()).toBe('Engineer');
    expect(engineer.getGithub()).toBe('gitExample');
})
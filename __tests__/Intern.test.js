const Intern = require('../lib/Intern');
test('creat intern object', () =>{
    const intern = new Intern('John', '1', 'john@gmail.com','schoolExample');
    expect(intern.name).toBe('John');
    expect(intern.id).toBe('1');
    expect(intern.email).toBe('john@gmail.com');
    expect(intern.school).toBe('schoolExample');
})

test('get requests', () =>{
    const intern = new Intern('John', '1', 'john@gmail.com','schoolExample');
    expect(intern.getName()).toBe('John');
    expect(intern.getId()).toBe('1');
    expect(intern.getEmail()).toBe('john@gmail.com');
    expect(intern.getRole()).toBe('Intern');
    expect(intern.getSchool()).toBe('schoolExample');
})
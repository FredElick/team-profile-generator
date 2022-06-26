const Manager = require('../lib/Manager');
test('creat manager object', () =>{
    const manager = new Manager('John', '1', 'john@gmail.com','12345');
    expect(manager.name).toBe('John');
    expect(manager.id).toBe('1');
    expect(manager.email).toBe('john@gmail.com');
    expect(manager.officeNumber).toBe('12345');
})

test('get requests', () =>{
    const manager = new Manager('John', '1', 'john@gmail.com','12345');
    expect(manager.getName()).toBe('John');
    expect(manager.getId()).toBe('1');
    expect(manager.getEmail()).toBe('john@gmail.com');
    expect(manager.getRole()).toBe('Manager');
})
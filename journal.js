function Journal(...values) {
    this.entries = values;
    
    this.print = () => {
        console.log('Journal:')
        this.entries.forEach(entry => entry.print());
    };

    this.addStudent = (A) =>{
        this.entries.push(A)
    };

    this.deleteStudent = (index) => {
        if (index >= 0 && index < this.entries.length) {
            this.entries.splice(index, 1);
        } else {
            console.log('Индекс вне диапазона');
        }
    };
}

exports.Journal = Journal
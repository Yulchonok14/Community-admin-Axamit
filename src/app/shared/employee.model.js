var Employee = (function () {
    function Employee(id, name, imageUrl, position, active) {
        if (active === void 0) { active = true; }
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;
        this.position = position;
        this.active = active;
    }
    return Employee;
})();
exports.Employee = Employee;
//# sourceMappingURL=employee.model.js.map
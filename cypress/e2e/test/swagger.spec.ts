describe('Pet API - CRUD Operations on Pet', () => {
    const petId = Math.floor(Math.random() * 1000000);
    const petData = {
        id: petId,
        name: "Rocky",
        status: "available"
    };

    it('Unique pet creation', () => {
        cy.request('POST', 'https://petstore.swagger.io/v2/pet', petData).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', petId);
            expect(response.body).to.have.property('name', petData.name);
            expect(response.body).to.have.property('status', petData.status);
        });
    });

    it('Update created new pet', () => {
        const updatedPetData = { ...petData, status: "sold" };
        cy.request('PUT', 'https://petstore.swagger.io/v2/pet', updatedPetData).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', petId);
            expect(response.body).to.have.property('status', "sold");
        });
    });

    it('Read newly created pet', () => {
        cy.request('GET', `https://petstore.swagger.io/v2/pet/${petId}`).then(response => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id', petId);
            expect(response.body).to.have.property('name', petData.name);
            expect(response.body).to.have.property('status', "sold");
        });
    });

    it('Delete new pet', () => {
        cy.request('DELETE', `https://petstore.swagger.io/v2/pet/${petId}`).then(response => {
            expect(response.status).to.eq(200);
        });
    });

    it('Verify pet delete assertion', () => {
        cy.request({
            method: 'GET',
            url: `https://petstore.swagger.io/v2/pet/${petId}`,
            failOnStatusCode: false
        }).then(response => {
            expect(response.status).to.eq(404);
        });
    });
});
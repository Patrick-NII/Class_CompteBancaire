

class CompteBancaire {
    constructor(titulaire, solde = 0) {
        this.titulaire = titulaire;
        this.solde = solde;
    }

    deposer(montant) {
        this.solde += montant;
        console.log(`Depot de ${montant}€. Solde actuel: ${this.solde}€.`);
    }

    retirer(montant) {
        if (montant <= this.solde) {
            this.solde -= montant;
            console.log(`Retrait de ${montant}€. Solde actuel: ${this.solde}€.`);
        } else {
            console.log("Solde insuffisant.");
        }
    }

    afficherSolde() {
        console.log(`Solde actuel de ${this.titulaire}: ${this.solde}€.`);
    }
}

const monCompte = new CompteBancaire('Alice');
monCompte.deposer(500);
monCompte.retirer(200);
monCompte.afficherSolde();  // Affiche "Solde actuel de Alice: 300€."

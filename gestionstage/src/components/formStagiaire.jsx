import { FormControl, FormLabel, Input } from "@chakra-ui/react";

export default function FormStagiaire({stagiaire}){
    return (
        <>
        <FormControl>
            <FormLabel>ID</FormLabel>
            <Input readOnly value={stagiaire.id}/>
        </FormControl>
        <FormControl>
            <FormLabel>Numéro Etudiant</FormLabel>
            <Input readOnly value={stagiaire.email}/>
        </FormControl>
        <FormControl>
            <FormLabel>NomComplet</FormLabel>
            <Input readOnly value={stagiaire.nomComplete}/>
        </FormControl>
        <FormControl>
            <FormLabel>Email</FormLabel>
            <Input readOnly value={stagiaire.email}/>
        </FormControl>
        <FormControl>
            <FormLabel>Filière</FormLabel>
            <Input readOnly value={stagiaire.filiere}/>
        </FormControl>
        <FormControl>
            <FormLabel>Télephone</FormLabel>
            <Input readOnly value={stagiaire.numeroTelephone}/>
        </FormControl>
        </>
    )
}
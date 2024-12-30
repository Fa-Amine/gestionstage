import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import DocumentList from "./ListDocuments";

export default function FormStage({stage}){
    return (
        <>
        <FormControl>
            <FormLabel>ID</FormLabel>
            <Input readOnly value={stage.id}/>
        </FormControl>
        <FormControl>
            <FormLabel>Type</FormLabel>
            <Input readOnly value={stage.type}/>
        </FormControl>
        <FormControl>
            <FormLabel>Nom d'entreprise</FormLabel>
            <Input readOnly value={stage.nomEntreprise}/>
        </FormControl>
        <FormControl>
            <FormLabel>Domaine d'entreprise</FormLabel>
            <Input readOnly value={stage.domainEntreprise}/>
        </FormControl>
        <FormControl>
            <FormLabel>Date Début</FormLabel>
            <Input readOnly value={stage.dateDebut}/>
        </FormControl>
        <FormControl>
            <FormLabel>Date Fin</FormLabel>
            <Input readOnly value={stage.dateFin}/>
        </FormControl>
        <DocumentList documents={stage.documents} />
        </>
    )
}
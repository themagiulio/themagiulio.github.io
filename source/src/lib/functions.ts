export function goTo(page: string){
    document.getElementById(page)?.scrollIntoView( { behavior: 'smooth' } )
}
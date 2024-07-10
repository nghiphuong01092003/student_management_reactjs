import Swal from 'sweetalert2';
function ShowConfirmation(message: string): Promise<boolean> {
    return Swal.fire({
        title: 'Confirmation',
        text: message,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes',
        cancelButtonText: 'No'
    }).then((result: { isConfirmed: any; }) => result.isConfirmed);
}
export default ShowConfirmation;
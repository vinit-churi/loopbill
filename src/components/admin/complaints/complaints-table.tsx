const getStatusColor = (status: string) => {
    switch (status) {
        case 'Scheduled':
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
        case 'In progress':
            return 'text-blue-600 border-blue-400 bg-blue-100'
        case 'Unscheduled':
            return 'text-red-600 border-red-400 bg-red-100'
        case 'Completed':
            return 'text-green-600 border-green-400 bg-green-100'
        case 'Expired':
            return 'text-gray-600 border-gray-400 bg-gray-100'
        default:
            return 'text-gray-600 border-gray-400 bg-gray-100'
    }
}

const getPriorityColor = (priority: string) => {
    switch (priority) {
        case 'High':
            return 'text-green-600 border-green-400 bg-green-100'
        case 'Normal':
            return 'text-yellow-600 border-yellow-400 bg-yellow-100'
        case 'Low':
            return 'text-red-600 border-red-400 bg-red-100'
        default:
            return 'text-gray-600 border-gray-400 bg-gray-100'
    }
}

export default function ComplaintsTable() {
    return (
        <div>Hello</div>
    )
}
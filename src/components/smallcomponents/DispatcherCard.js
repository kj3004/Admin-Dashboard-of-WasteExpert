import React from 'react';
import UserCard from './UserCard';
import AddNewDispatcher from './AddNewDispatcher';

// Example collector data
const dispatchers = [
  { id: 1, name: 'Name 1', vehical: 'xxx-xxxx', job: 'This is the content of card 1.', mobile: '077 1234 567', image:'' },
  { id: 2, name: 'Name 2', vehical: 'xxx-xxxx', job: 'This is the content of card 2.', mobile: '077 1234 567', image:'' },
  { id: 3, name: 'Name 3', vehical: 'xxx-xxxx', job: 'This is the content of card 3.', mobile: '077 1234 567', image:'' },
  { id: 4, name: 'Name 4', vehical: 'xxx-xxxx', job: 'This is the content of card 4.', mobile: '077 1234 567', image:'' },
  { id: 5, name: 'Name 5', vehical: 'xxx-xxxx', job: 'This is the content of card 5.', mobile: '077 1234 567', image:'' },
  { id: 6, name: 'Name 6', vehical: 'xxx-xxxx', job: 'This is the content of card 6.', mobile: '077 1234 567', image:'' },
  { id: 7, name: 'Name 7', vehical: 'xxx-xxxx', job: 'This is the content of card 7.', mobile: '077 1234 567', image:'' },
  { id: 8, name: 'Name 8', vehical: 'xxx-xxxx', job: 'This is the content of card 8.', mobile: '077 1234 567', image:'' },
  { id: 9, name: 'Name 9', vehical: 'xxx-xxxx', job: 'This is the content of card 9.', mobile: '077 1234 567', image:'' },
  { id: 10, name: 'Name 10', vehical: 'xxx-xxxx', job: 'This is the content of card 10.', mobile: '077 1234 567', image:'' },
];

function DispatcherCard() {
  return (
    <div className="overflow-y-auto h-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
         {/* Placeholder for Add New dispatcher card */}
        <div className="flex justify-center items-center">
          <AddNewDispatcher />
        </div>
        
        {/* Render existing dispatcher cards */}
        {dispatchers.map((dispatcher) => (
          <UserCard key={dispatcher.id} user={dispatcher} />
        ))}
        
       
      </div>
    </div>
  );
}

export default DispatcherCard;

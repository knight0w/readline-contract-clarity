
import React from 'react';
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';

// Mock data for demo purposes
const documents = [
  {
    id: '1',
    title: 'Record Deal - Universal Music',
    type: 'record',
    date: '2023-04-15',
    artist: 'John Smith',
    status: 'analyzed',
    riskScore: 'high',
  },
  {
    id: '2',
    title: 'Publishing Agreement - Sony Music',
    type: 'publishing',
    date: '2023-04-10',
    artist: 'Emily Johnson',
    status: 'completed',
    riskScore: 'medium',
  },
  {
    id: '3',
    title: 'Management Contract - Live Nation',
    type: 'management',
    date: '2023-04-05',
    artist: 'The Weekenders',
    status: 'completed',
    riskScore: 'low',
  },
  {
    id: '4',
    title: 'Record Deal - Warner Music',
    type: 'record',
    date: '2023-03-28',
    artist: 'Jane Doe',
    status: 'completed',
    riskScore: 'medium',
  },
  {
    id: '5',
    title: 'Publishing Agreement - BMG',
    type: 'publishing',
    date: '2023-03-20',
    artist: 'Mike Wilson',
    status: 'completed',
    riskScore: 'high',
  },
];

interface RecentDocumentTableProps {
  filter?: string;
  limit?: number;
}

const RecentDocumentTable = ({ filter, limit }: RecentDocumentTableProps) => {
  const filteredDocuments = filter 
    ? documents.filter(doc => doc.type === filter)
    : documents;
    
  const limitedDocuments = limit 
    ? filteredDocuments.slice(0, limit) 
    : filteredDocuments;

  return (
    <div className="rounded-md overflow-hidden border border-gray-800">
      <Table>
        <TableHeader className="bg-gray-900">
          <TableRow className="hover:bg-gray-900 border-gray-800">
            <TableHead className="text-gray-400">Document</TableHead>
            <TableHead className="text-gray-400">Artist</TableHead>
            <TableHead className="text-gray-400">Type</TableHead>
            <TableHead className="text-gray-400">Date</TableHead>
            <TableHead className="text-gray-400">Risk</TableHead>
            <TableHead className="text-gray-400 text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {limitedDocuments.map((doc) => (
            <TableRow key={doc.id} className="hover:bg-gray-900 border-gray-800">
              <TableCell>
                <Link to={`/studio/analysis/${doc.id}`} className="font-medium text-readline-teal hover:underline">
                  {doc.title}
                </Link>
              </TableCell>
              <TableCell>{doc.artist}</TableCell>
              <TableCell>
                <Badge variant="outline" className="capitalize border-gray-700 text-gray-400">
                  {doc.type}
                </Badge>
              </TableCell>
              <TableCell className="text-gray-400">{doc.date}</TableCell>
              <TableCell>
                <Badge className={`
                  ${doc.riskScore === 'high' ? 'bg-red-500/20 text-red-400 hover:bg-red-500/30' : ''}
                  ${doc.riskScore === 'medium' ? 'bg-yellow-500/20 text-yellow-400 hover:bg-yellow-500/30' : ''}
                  ${doc.riskScore === 'low' ? 'bg-green-500/20 text-green-400 hover:bg-green-500/30' : ''}
                `}>
                  {doc.riskScore}
                </Badge>
              </TableCell>
              <TableCell className="text-right">
                <Badge className={`
                  ${doc.status === 'completed' ? 'bg-readline-teal/20 text-readline-teal' : ''}
                  ${doc.status === 'analyzed' ? 'bg-blue-500/20 text-blue-400' : ''}
                `}>
                  {doc.status}
                </Badge>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default RecentDocumentTable;

'use client';

import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import ModalDocumentView from '../ui/modal-document-view';
import Link from 'next/link';
import Image from 'next/image';

interface AlertModalProps {
  isOpen: boolean;
  onClose: () => void;
  loading: boolean;
  document: any;
}

const DocumentViewModal = ({
  isOpen,
  onClose,
  loading,
  document,
}: AlertModalProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  const imageTypes = [
    'application/png',
    'application/jpg',
    'application/jpeg',
    'application/gif',
    'images/png',
    'images/jpg',
    'images/jpeg',
    'images/gif',
    'image/png',
    'image/jpg',
    'image/jpeg',
    'image/gif',
    'image/webp',
  ];

  console.log(document.document_file_mimeType, 'mimeType');

  if (imageTypes.includes(document.document_file_mimeType)) {
    console.log('image');
    return (
      <ModalDocumentView isOpen={isOpen} onClose={onClose}>
        <div className="flex h-full flex-col">
          <div className="relative h-full p-10">
            <Image fill alt="Image preview" src={document.document_file_url} />
          </div>
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            <Button disabled={loading} variant={'outline'} onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </ModalDocumentView>
    );
  }

  if (document.document_file_mimeType === 'application/pdf') {
    return (
      <ModalDocumentView isOpen={isOpen} onClose={onClose}>
        <div className="flex h-full flex-col">
          <embed
            style={{
              width: '100%',
              height: '100%',
            }}
            type="application/pdf"
            src={document.document_file_url}
          />
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            <Button disabled={loading} variant={'outline'} onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </ModalDocumentView>
    );
  } else {
    return (
      <ModalDocumentView isOpen={isOpen} onClose={onClose}>
        <div className="flex h-full flex-col">
          This format can not be previewed. Please download the file to view it.
          <Button>
            <Link href={document.document_file_url}> Download</Link>
          </Button>
          <div className="flex w-full items-center justify-end space-x-2 pt-6">
            <Button disabled={loading} variant={'outline'} onClick={onClose}>
              Cancel
            </Button>
          </div>
        </div>
      </ModalDocumentView>
    );
  }
};

export default DocumentViewModal;
